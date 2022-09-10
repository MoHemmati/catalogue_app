import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import ReactAudioPlayer from "react-audio-player";


export default function ShowAllPDF(props) {
    const [numPages, setNumPages] = useState(null);
    const arList = props.ar_list;

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    return (
        <Document
            file={props.pdf}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1}>
                    {
                        arList.map((arList) => {
                            if (arList.page_number === index + 1 && arList.type === 'text') {
                                return (
                                    <div className='ShowSinglePagePDF-inserted-texts' key={arList.id}>
                                        <p>{arList.my_text}</p>
                                    </div>
                                )
                            }
                            if (arList.page_number === index + 1 && arList.type === 'image') {
                                return (
                                    <div className='ShowSinglePagePDF-inserted-images-group' key={arList.id}>
                                        <a className='ShowSinglePagePDF-inserted-images-link ' href={arList.imgURL}
                                           target="_blank" rel="noreferrer">برای مشاهده‌ی عکس مربوط به این صفحه کلیک کنید.</a>
                                    </div>
                                )
                            }
                            if (arList.page_number === index + 1 && arList.type === 'video') {
                                return (
                                    <div className='ShowSinglePagePDF-inserted-images-group' key={arList.id}>
                                        <a className='ShowSinglePagePDF-inserted-images-link ' href={arList.videoURL}
                                           target="_blank" rel="noreferrer">برای مشاهده‌ی ویدیوی مربوط به این صفحه کلیک کنید.</a>
                                    </div>
                                )
                            }
                            if (arList.page_number === index + 1 && arList.type === 'audio'){
                                return (
                                    <div className='ShowSinglePagePDF-inserted-voices' key={arList.id}>
                                        <ReactAudioPlayer
                                            src={arList.audioURL}
                                            autoPlay={false}
                                            controls
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </Page>
            ))}
        </Document>
    );
}
