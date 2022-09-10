import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import ReactAudioPlayer from "react-audio-player";


pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function ShowSinglePagePDF(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const arList = props.ar_list;

    console.log('asdasdasdasdasd');

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }




    return (
        <>
            <Document
                file={props.pdf}
                options={{workerSrc: "/pdf.worker.js"}}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} size="A4" >
                    {
                        Object.values(arList).map((arList) => {
                            if (arList.page_number === pageNumber && arList.type === 'text') {
                                return (
                                    <div className='ShowSinglePagePDF-inserted-texts' key={arList.id}>
                                        <p>{arList.my_text}</p>
                                    </div>
                                )
                            }
                            if (arList.page_number === pageNumber && arList.type === 'image') {
                                return (
                                    <div className='ShowSinglePagePDF-inserted-images-links-group' key={arList.id}>
                                        <a className='ShowSinglePagePDF-inserted-images-link' href={arList.imgURL}
                                           target="_blank" rel="noreferrer">برای مشاهده‌ی عکس کلیک کنید.</a>
                                    </div>
                                )
                            }
                            if (arList.page_number === pageNumber && arList.type === 'video') {
                                return (
                                    <div className='ShowSinglePagePDF-inserted-images-group' key={arList.id}>
                                        <a className='ShowSinglePagePDF-inserted-images-link ' href={arList.videoURL}
                                           target="_blank" rel="noreferrer">برای مشاهده‌ی ویدیوی مربوط به این صفحه کلیک کنید.</a>
                                    </div>
                                )
                            }
                            if (arList.page_number === pageNumber && arList.type === 'voice'){
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
            </Document>
            <hr className='ShowSinglePagePDF-hr'/>
            <div>
                <button
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    className='ShowSinglePagePDF-button bn1'
                >
                    بعدی
                </button>
                <button disabled={pageNumber <= 1} onClick={previousPage}
                        className='ShowSinglePagePDF-button'>
                    قبلی
                </button>

            </div>
        </>
    );
}
