import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import ShowSinglePagePDF from "./ShowSinglePagePDF";
import music from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\Music.pdf';
import book from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Books\\Book.pdf';
import nature
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\adam-kool-ndN00KmbJ1c-unsplash-converted.pdf';
import musicImage1
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\marius-masalar-rPOmLGwai2w-unsplash.jpg';
import musicImage2 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\wes-hicks-MEL-jJnm7RQ-unsplash.jpg';
import musicImage3
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\mohammad-metri-1oKxSKSOowE-unsplash.jpg';
import bookImage1 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Books\\mikolaj-DCzpr09cTXY-unsplash.jpg';
import bookImage2
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Books\\sharon-mccutcheon-eMP4sYPJ9x0-unsplash.jpg';
import bookImage3 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Books\\alfons-morales-YLSwjSy7stw-unsplash.jpg';
import bookImage4 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\mohammad-metri-1oKxSKSOowE-unsplash.jpg';
import natureImage1 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\david-marcu-78A265wPiO4-unsplash.jpg';
import natureImage2
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\lukasz-szmigiel-jFCViYFYcus-unsplash.jpg';
import natureImage3
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\qingbao-meng-01_igFr7hd4-unsplash.jpg';
import natureVideo1 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\pexels-mart-production-8447658.mp4';
import natureMusicURL
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\melodyloops-preview-healing-and-meditation-mood-2m30s.mp3';
import musicURL
    from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\melodyloops-preview-tropical-summer-2m30s.mp3';
import ShowAllPDF from "./ShowAllPDF";
import ShowTexts from "./ShowTexts";
import ShowSinglePageImages from "./ShowSinglePageImages";
import ShowAllImages from "./ShowAllImages";
import ReactPaginate from "react-paginate";


let productCatalogue = {
    '1': {
        'id': '1',
        'catalogueList':
            {
                displayDirection: 'horizontal',
                pdf: music,
                arList: [
                    {
                        type: "text",
                        my_text: 'این کاتالوگ مربوط به موسیقی می‌باشد.',
                        page_number: 1,
                        id: '1'
                    },
                    {
                        type: "image",
                        page_number: 2,
                        imgURL: musicImage1,
                        id: 2
                    },
                    {
                        type: "voice",
                        page_number: 3,
                        audioURL: musicURL,
                        id: '3'
                    }
                ],
                textList: [
                    {
                        my_text: 'این کاتالوگ برای موسیقی می‌باشد.',
                        id: '5'
                    },
                    {
                        my_text: 'موسیقی یکی از زیباترین هنرهای موجود در جهان است.',
                        id: '6'
                    }
                ],
                imageList: [
                    {
                        imageURL: musicImage2,
                        id: '7'
                    },
                    {
                        imageURL: musicImage3,
                        id: '8'
                    }
                ]
            }

    },
    '2': {
        'id': '2',
        'catalogueList':
            {
                displayDirection: 'vertical',
                pdf: book,
                arList: [
                    {
                        type: "text",
                        my_text: 'این کاتالوگ مربوط به کتاب می‌باشد.',
                        page_number: 1,
                        id: '1'
                    },
                    {
                        type: "image",
                        page_number: 2,
                        imgURL: bookImage1,
                        id: '2'
                    },
                    {
                        type: "image",
                        page_number: 3,
                        imgURL: bookImage2,
                        id: '3'
                    }
                ],
                textList: [
                    {
                        my_text: 'این کاتالوگ برای کتاب می‌باشد.',
                        id: '4'
                    }
                ],
                imageList: [
                    {
                        imageURL: bookImage3,
                        id: '5'
                    },
                    {
                        imageURL: bookImage4,
                        id: '6'
                    }
                ]
            }
    },
    '3': {
        'id': '3',
        'catalogueList':
            {
                displayDirection: 'horizontal',
                pdf: nature,
                arList: [
                    {
                        type: "text",
                        my_text: 'این کاتالوگ مربوط به طبیعت می‌باشد.',
                        page_number: 1,
                        id: '1'
                    },
                    {
                        type: "image",
                        page_number: 2,
                        imgURL: natureImage1,
                        id: '2'
                    },
                    {
                        type: "image",
                        page_number: 3,
                        imgURL: natureImage2,
                        id: '3'
                    },
                    {
                        type: "voice",
                        page_number: 3,
                        audioURL: natureMusicURL,
                        id: '3'
                    },
                    {
                        type: "video",
                        page_number: 2,
                        videoURL: natureVideo1,
                        id: '4'
                    }
                ],
                textList: [
                    {
                        my_text: 'این کاتالوگ برای طبیعت می‌باشد.',
                        id: '5'
                    }
                ],
                imageList: [
                    {
                        imageURL: natureImage3,
                        id: '6'
                    }
                ]
            }

    }
}

let commentsList = [

    {
        name: 'علی حسنقلی',
        date: '۵ فروردین ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '1',
        catalogueID: '1'
    },
    {
        name: 'ممدرضا همتی',
        date: '۵ فروردین ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '2',
        catalogueID: '1'
    }
    ,

    {
        name: 'هوشنگ امیرفضلی',
        date: '۵ فروردین ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '3',
        catalogueID: '2'
    },
    {
        name: 'غلامحسین مرادی',
        date: '۵ فروردین ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '4',
        catalogueID: '2'
    }
    ,

    {
        name: 'بهروز مرادی',
        date: '۵ فروردین ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '5',
        catalogueID: '3'
    },
    {
        name: 'ساسان نعمتی',
        date: '۵ فروردین ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '6',
        catalogueID: '3'
    }
    ,

    {
        name: 'گرشاسب حسام‌الدینی',
        date: '۲ مرداد ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '7',
        catalogueID: '4'
    },
    {
        name: 'حسام نبوی',
        date: '۵ خرداد ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '8',
        catalogueID: '4'
    }
    ,

    {
        name: 'علی غلامی',
        date: '۱۲ اردیبهشت ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '9',
        catalogueID: '5'
    },
    {
        name: 'فاطمه همتی',
        date: '۲۰ بهمن ۱۴۰۰',
        comment: 'خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.خرید از شرکت را توصیه می‌کنم.',
        id: '10',
        catalogueID: '5'
    }


]
const findComments = (commentList, id) => {
    let comment = [];
    if (typeof commentList !== 'undefined') {
        for (let i = 0; i < commentList.length; i++) {
            if (commentList[i].catalogueID === id) {
                comment.push(commentList[i]);
            }
        }
        return comment;
    }
}

const CataloguePage = () => {
    const {id} = useParams();
    let cnt = 0;
    const [commentPageNumber, setCommentPageNumber] = useState(0);
    const commentsPerPage = 3;
    const commentsVisited = commentPageNumber * commentsPerPage;
    for (let i = 0; i < commentsList.length; i++) {
        if (commentsList[i].catalogueID === id)
            cnt++
    }
    const commentPageCount = Math.ceil(cnt / commentsPerPage);
    const changeCommentPage = ({selected}) => {
        setCommentPageNumber(selected);
    };

    return (
        <div className='CataloguePage'>

            <div className='CataloguePage-main'>
                {
                    Object.values(productCatalogue).map((catalogue) => {
                        if (catalogue.id === id) {

                            if (catalogue.catalogueList.displayDirection === 'horizontal') {
                                return (
                                    <div className='CataloguePage-main-body'>
                                        <ShowSinglePagePDF pdf={catalogue.catalogueList.pdf}
                                                           ar_list={catalogue.catalogueList.arList}/>
                                        <ShowTexts texts_list={catalogue.catalogueList.textList}/>
                                        <ShowSinglePageImages imageList={catalogue.catalogueList.imageList}/>
                                    </div>
                                );
                            } else if (catalogue.catalogueList.displayDirection === 'vertical') {
                                return (
                                    <div className='CataloguePage-main-body'>
                                        <ShowAllPDF pdf={catalogue.catalogueList.pdf}
                                                    ar_list={catalogue.catalogueList.arList}/>
                                        <ShowTexts texts_list={catalogue.catalogueList.textList}/>
                                        <ShowAllImages imageList={catalogue.catalogueList.imageList}/>
                                    </div>
                                );
                            }
                        }

                    })
                }

            </div>
            <div className='CataloguePage-comments'>
                <div className='HomePage-main-comment-section c1'>
                    <div className='HomePage-main-comment-section-header'>
                        <p className='HomePage-main-comment-section-header-text'>دیدگاه‌ها</p>
                    </div>
                    <div className='HomePage-main-comment-section-body'>
                        <div className='HomePage-main-comment-section-body-comments'>
                            {
                                Object.values(findComments(commentsList, id)).slice(commentsVisited, commentsVisited + commentsPerPage)
                                    .map((comment) => {
                                            if (comment.catalogueID === id) {
                                                return (
                                                    <div className='HomePage-main-comment-section-body-comment'
                                                         key={comment.id}>
                                                        <div
                                                            className='HomePage-main-comment-section-body-comment-header'>
                                                            <p className='HomePage-main-comment-section-body-comment-header-name'>{comment.name}</p>
                                                            <span className="dot"/>
                                                            <p className='HomePage-main-comment-section-body-comment-header-date'>{comment.date}</p>
                                                        </div>
                                                        <div
                                                            className='HomePage-main-comment-section-body-comment-text'>
                                                            {comment.comment}
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        }
                                    )
                            }
                            <ReactPaginate
                                previousLabel={"قبلی"}
                                nextLabel={"بعدی"}
                                pageCount={commentPageCount}
                                onPageChange={changeCommentPage}
                                containerClassName={"pagination-comments-buttons"}
                                previousLinkClassName={"pagination-comments-buttons-button"}
                                nextLinkClassName={"pagination-comments-buttons-next-button"}
                                disabledClassName={"pagination-comments-buttons-disabled"}
                                activeClassName={"pagination-comments-buttons-active"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CataloguePage;