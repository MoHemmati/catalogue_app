import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import site_icon from 'D:/Projects/React/catalogue-app/src/stuff//language_black_24dp.svg'
import mail_icon from 'D:/Projects/React/catalogue-app/src/stuff//email_black_24dp.svg'
import phone_icon from 'D:/Projects/React/catalogue-app/src/stuff/phone_in_talk_black_24dp.svg'
import location_icon from 'D:/Projects/React/catalogue-app/src/stuff/location_on_black_24dp.svg'
import ReactPaginate from "react-paginate";
import bookImage from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Books\\alfons-morales-YLSwjSy7stw-unsplash.jpg';
import natureImage from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\v2osk-1Z2niiBPg5A-unsplash.jpg';
import musicImage from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\c-d-x-PDX_a_82obo-unsplash.jpg';


const ShowComments = (props) => {
    /*********************************************CommentsSection****************************************/
    let recommendations = props.recommendations;
    let comments = props.comments;
    const [commentPageNumber, setCommentPageNumber] = useState(0);
    const commentsPerPage = 3;
    const commentsVisited = commentPageNumber * commentsPerPage;
    const commentPageCount = Math.ceil(comments.length / commentsPerPage);
    const changeCommentPage = ({selected}) => {
        setCommentPageNumber(selected);
    };
    /*********************************************RecommendationSection****************************************/
    const [recommendationPageNumber, setRecommendationPageNumber] = useState(0);
    const recommendationsPerPage = 3;
    const recommendationsVisited = recommendationPageNumber * recommendationsPerPage;
    const recommendationPageCount = Math.ceil(recommendations.length / recommendationsPerPage);
    const changeRecommendationPage = ({selected}) => {
        setRecommendationPageNumber(selected);
    };

    if (props.showType === 'comments') {
        return (
            <div className='HomePage-main-comment-section-body-comments'>
                {
                    Object.values(comments).slice(commentsVisited, commentsVisited + commentsPerPage)
                        .map((comment) => {
                                return (
                                    <div className='HomePage-main-comment-section-body-comment' key={comment.id}>
                                        <div className='HomePage-main-comment-section-body-comment-header'>
                                            <p className='HomePage-main-comment-section-body-comment-header-name'>{comment.name}</p>
                                            <span className="dot"/>
                                            <p className='HomePage-main-comment-section-body-comment-header-date'>{new Date(comment.updated_at).toLocaleString('fa-IR')}</p>
                                        </div>
                                        <div className='HomePage-main-comment-section-body-comment-text'>
                                            {comment.content}
                                        </div>
                                    </div>
                                )
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
        )
    } else if (props.showType === 'Q_and_A') {
        return <div/>
    } else if (props.showType === 'recommendations') {
        console.log(recommendations)
        return (
            <div className='HomePage-main-comment-section-body-comments'>
                {
                    Object.values(recommendations).slice(recommendationsVisited, recommendationsVisited + recommendationsPerPage)
                        .map((recommendation) => {
                                return (
                                    <div className='HomePage-main-comment-section-body-comment' key={recommendation.id}>
                                        <div className='HomePage-main-comment-section-body-comment-header'>
                                            <p className='HomePage-main-comment-section-body-comment-header-name'>{recommendation.recommender_name}</p>
                                            <span className="dot"/>
                                            <p className='HomePage-main-comment-section-body-comment-header-date'>{new Date(recommendation.updated_at).toLocaleString('fa-IR')}</p>
                                        </div>
                                        <div className='HomePage-main-comment-section-body-comment-text'>
                                            {recommendation.content}
                                        </div>
                                    </div>
                                )
                            }
                        )
                }
                <ReactPaginate
                    previousLabel={"قبلی"}
                    nextLabel={"بعدی"}
                    pageCount={recommendationPageCount}
                    onPageChange={changeRecommendationPage}
                    containerClassName={"pagination-recommendations-buttons"}
                    previousLinkClassName={"pagination-recom-buttons-button"}
                    nextLinkClassName={"pagination-recom-buttons-next-button"}
                    disabledClassName={"pagination-recom-buttons-disabled"}
                    activeClassName={"pagination-recommendations-buttons-active"}
                />
            </div>
        )
    }
}

const getCompanyDetails = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/profile/information/" + localStorage.getItem('user_name');
    console.log(localStorage.getItem('user_name'))

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await rawResponse.json()
}
const getCompanyClients = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/profile/clients/" + localStorage.getItem('user_name');

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await rawResponse.json()
}

const getImages = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/profile/homepage/images/" + localStorage.getItem('user_name');

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await rawResponse.json()
}


const getAchievements = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/profile/achievement/" + localStorage.getItem('user_name');

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await rawResponse.json()
}

const getComments = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/profile/" + localStorage.getItem('user_name') + "/comments";

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await rawResponse.json()
}

const getRecommendations = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/business-account/profile/recommendations/" + localStorage.getItem('user_name');

    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await rawResponse.json()
}


const HomePage = () => {
    const [companyDetails, setCompanyDetails] = useState({});
    const [clientsImages, setClientsImages] = useState([]);
    const [achievementsImages, setAchievementsImages] = useState([]);
    const [images, setImages] = useState([]);
    const [recommendations, setRecommendations] = useState({});
    const [comments, setComments] = useState({});
    const [run, setRun] = useState(false);
    const [reRun, setRerun] = useState(false);
    const [reRun2, setRerun2] = useState(false);


    useEffect(() => {
        getCompanyDetails().then((res) => {
            setCompanyDetails(res);
        });
        getCompanyClients().then((result) => {
            setClientsImages(result)
            setRun(true);
        });
        getAchievements().then((result) => {
            setAchievementsImages(result);
        });
        getImages().then((res) => {
            setImages(res);
        })
        getRecommendations().then((result) => {
            console.log(result)
            setRecommendations(result);
            console.log(recommendations)
            setRerun(true);
        })
        getComments().then((result) => {
            console.log(result);
            setComments(result);
            setRerun2(true);
        })
    }, [run, reRun, reRun2]);

    const companyImage = (img) => {
        if (typeof img !== 'undefined'){
            if (img.toLowerCase().includes('storage')){
                return "http://www.justfortestjustfortest.ir/" + img;
            }
            else {
                return img;
            }
        }
    }



    const [picturesPageNumber, setPicturesPageNumber] = useState(0);
    const picturePerPage = 1;
    const pictureVisited = picturesPageNumber * picturePerPage;
    const picPageCount = images.length;
    const changePicturePage = ({selected}) => {
        setPicturesPageNumber(selected);
    };

    const [showComments, setShowComments] = useState('comments');

    let productCatalogue = {
        '1': {
            'pic': musicImage,
            'id': '1',
            'name': 'کاتالوگ موسیقی',
            'date': '۱۴۰۰/۰۵/۰۲'
        },
        '2': {
            'pic': bookImage,
            'id': '2',
            'name': 'کاتالوگ کتاب',
            'date': '۱۳۹۹/۱۲/۱۰'
        },
        '3': {
            'pic': natureImage,
            'id': '3',
            'name': 'کاتالوگ طبیعت',
            'date': '۱۴۰۰/۰۲/۲۶'
        }
    }

    const history = useHistory();
    const linkStyle = {
        textDecoration: "none",
        color: 'black',
        display: 'flex'
    };


    return (

        <div className='HomePage'>
            <div className="HomePage-header">
                <button className='HomePage-header-edit-button'>ویرایش پروفایل</button>
            </div>
            <div className='HomePage-contents'>
                <div className='HomePage-introduction'>
                    <img src={companyImage(companyDetails.profile_pic)}
                         alt='HomePage-introduction-logo' className='HomePage-introduction-logo'
                    />
                    <p className='HomePage-introduction-company-name'>{companyDetails.name}</p>
                    <p className='HomePage-introduction-company-slogan'/>
                    <p className='HomePage-introduction-company-body'>{companyDetails.about_us}</p>
                    <div className='HomePage-introduction-info-details'>
                        <img src={site_icon} alt='Site Icon' className='HomePage-introduction-icons'/>
                        <a href={companyDetails.website_address} className='HomePage-introduction-details-text'
                           target="_blank" rel="noreferrer">{companyDetails.website_address}</a>
                    </div>
                    <div className='HomePage-introduction-info-details'>
                        <img src={mail_icon} alt='Mail Icon' className='HomePage-introduction-icons'/>
                        <p className='HomePage-introduction-details-text'>{companyDetails.contact_email}</p>
                    </div>
                    <div className='HomePage-introduction-info-details phoneNumber'>
                        <img src={phone_icon} alt='Site Icon' className='HomePage-introduction-icons'/>
                        <p className='HomePage-introduction-details-text'>{companyDetails.phone_number}</p>
                    </div>
                    <div className='HomePage-introduction-info-details address'>
                        <img src={location_icon} alt='Site Icon' className='HomePage-introduction-icons'/>
                        <p className='HomePage-introduction-details-text address-size'>{companyDetails.address}</p>
                    </div>
                </div>

                <div className='HomePage-main'>
                    <div className='HomePage-main-pics'>
                        {
                            images.slice(pictureVisited, pictureVisited + picturePerPage)
                                .map((picture) => {
                                    return (
                                        <img src={"http://www.justfortestjustfortest.ir" + picture}
                                             alt='HomePage-main-picture' className='HomePage-main-picture'
                                        />
                                    )
                                })
                        }
                        <ReactPaginate
                            previousLabel={"قبلی"}
                            nextLabel={"بعدی"}
                            pageCount={picPageCount}
                            onPageChange={changePicturePage}
                            containerClassName={"pagination-pictures-buttons"}
                            previousLinkClassName={"pagination-pictures-buttons-previous-button"}
                            nextLinkClassName={"pagination-pictures-buttons-next-button"}
                            disabledClassName={"pagination-pictures-buttons-disabled"}
                            activeClassName={"pagination-pictures-buttons-active"}
                        />

                    </div>
                    <div className='HomePage-main-achievements'>
                        <div className='HomePage-main-achievements-header'>
                            <p className='HomePage-main-achievements-text'>افتخارات</p>
                            <Link to='#' className='HomePage-main-achievements-link'>مشاهده‌ی همه ></Link>
                        </div>
                        <div className='HomePage-main-achievements-pics'>
                            {
                                Object.values(achievementsImages).slice(0, 5).map(
                                    (images) => {
                                        console.log(images)
                                        return (
                                            <div className='achievements-pics-div'>
                                                <img src={"http://www.justfortestjustfortest.ir" + images.img_path}
                                                     alt='achievements-pics'
                                                     className='achievements-pics'/>
                                            </div>

                                        )
                                    }
                                )
                            }
                        </div>

                    </div>
                    <div className='HomePage-main-customers'>
                        <div className='HomePage-main-customers-header'>
                            <p className='HomePage-main-customers-header-text'>مشتری‌ها</p>
                            <Link to='#' className='HomePage-main-customers-header-link'>مشاهده‌ی همه ></Link>
                        </div>
                        <div className='HomePage-main-customers-pics'>
                            {
                                Object.values(clientsImages).slice(0, 9).map(
                                    (pictures) => {
                                        return (
                                            <div className='HomePage-main-customers-pic' key={pictures.id}>
                                                <img src={"http://www.justfortestjustfortest.ir" + pictures.img_path}
                                                     alt='path'
                                                     className='customers-pics'/>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='HomePage-main-comments'>
                        <div className='HomePage-main-comments-header'>
                            <p className='HomePage-main-comments-header-text'>دیدگاه مشتری‌ها</p>
                        </div>
                        <div className='HomePage-main-comment-section'>
                            <div className='HomePage-main-comment-section-header'>
                                <p className={'HomePage-main-comment-section-header-text' + ((showComments === 'comments') ? ' comments-active' : ' disable')}
                                   onClick={() => setShowComments('comments')}>نظرات</p>
                                <p className={'HomePage-main-comment-section-header-text' + ((showComments === 'Q_and_A') ? ' comments-active' : ' disable')}
                                   onClick={() => setShowComments('Q_and_A')}>پرسش و پاسخ</p>
                                <p className={'HomePage-main-comment-section-header-text' + ((showComments === 'recommendations') ? ' comments-active' : ' disable')}
                                   onClick={() => setShowComments('recommendations')}>توصیه‌نامه‌ها</p>
                            </div>
                            <div className='HomePage-main-comment-section-body'>
                                <ShowComments showType={showComments} recommendations={recommendations}
                                              comments={comments}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='HomePage-Products'>
                    <div className='HomePage-Products-contents'>
                        <p className='HomePage-Products-contents-text'>محصولات</p>
                        <div className='HomePage-Products-contents-catalogue-list'>
                            {
                                Object.values(productCatalogue)
                                    .slice(0, 6)
                                    .map((catalogue) => {
                                        return (
                                            <div className='HomePage-Products-contents-catalogue-list-body'
                                                 key={catalogue.id}>
                                                <Link to={`/CataloguePage/${catalogue.id}`} style={linkStyle}>
                                                    <div className='HomePage-Products-contents-catalogue-list-body-img'>
                                                        <img src={catalogue.pic} alt='catalogue-pic'
                                                             className='catalogue-pic'/>
                                                    </div>
                                                    <div
                                                        className='HomePage-Products-contents-catalogue-list-body-details'>
                                                        <p className='catalogue-name'>{catalogue.name}</p>
                                                        <p className='catalogue-date'>{catalogue.date}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <button className='HomePage-Products-contents-button'>مشاهده‌ی بیشتر...</button>
                        <button className='HomePage-Products-contents-button' onClick={() => {
                            history.push('/CreateNewCatalogue');
                        }}>ساخت کاتالوگ جدید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default HomePage;