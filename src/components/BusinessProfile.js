import React, {useEffect, useState} from 'react';
import pic2 from "D:/Projects/React/catalogue-app/src/pexels-lumn-167699.jpg";
import viewsIcon from 'D:/Projects/React/catalogue-app/src/visibility_black_24dp.svg'
import commentsIcon from 'D:/Projects/React/catalogue-app/src/comment_black_24dp.svg'
import dateIcon from 'D:/Projects/React/catalogue-app/src/date_range_black_24dp.svg'
import ChartJs from "./ChartJS";
import bookImage from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Books\\alfons-morales-YLSwjSy7stw-unsplash.jpg';
import natureImage from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Nature\\v2osk-1Z2niiBPg5A-unsplash.jpg';
import musicImage from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\Music\\c-d-x-PDX_a_82obo-unsplash.jpg';
import {Link} from "react-router-dom";

let catalogues = {
    '1': {
        'pic': musicImage,
        'id': '1',
        'name': 'کاتالوگ موسیقی',
        'date': '۱۴۰۰/۰۵/۰۲',
        'numberOfViews': 743,
        'numberOfComments': 312
    },
    '2': {
        'pic': bookImage,
        'id': '2',
        'name': 'کاتالوگ کتاب',
        'date': '۱۳۹۹/۱۲/۱۰',
        'numberOfViews': 432,
        'numberOfComments': 108
    },
    '3': {
        'pic': natureImage,
        'id': '3',
        'name': 'کاتالوگ طبیعت',
        'date': '۱۴۰۰/۰۲/۲۶',
        'numberOfViews': 524,
        'numberOfComments': 237
    }
}

const chartDataWeekly = {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    datasets: [
        {
            data: [
                102,
                84,
                84,
                64,
                24,
                234,
                12
            ],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ]
        },

    ]
};

let chartDataYearly = {
    labels: [],
    datasets: [
        {
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ]
        },

    ]
};

const chartDataMonthly = {
    labels: ['یکم', 'دوم', 'سوم', 'چهارم', 'پنجم', 'ششم', 'هفتم', 'هشتم', 'نهم', 'دهم', 'یازدهم', 'دوازدهم'],
    datasets: [
        {
            data: [
                423,
                154,
                84,
                634,
                298,
                232,
                642,
                823,
                243,
                526,
                53,
                203
            ],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ]
        },

    ]
};
const followers = {
    '1': {
        'avatar': pic2,
        'name': 'علی محمدی',
        'numberOfViews': 300
    },
    '2': {
        'avatar': pic2,
        'name': 'محمد موسی زاده',
        'numberOfViews': 200
    },
    '3': {
        'avatar': pic2,
        'name': 'سارا نبوی',
        'numberOfViews': 128
    },
    '4': {
        'avatar': pic2,
        'name': 'حامد اسماعیلی',
        'numberOfViews': 285
    },
    '5': {
        'avatar': pic2,
        'name': 'آتنا همتی',
        'numberOfViews': 12
    },
}
const ShowFollowers = (props) => {
    const type = props.showFollowersType;
    if (type === 'mostViewers') {
        return (
            <div>
                {
                    Object.values(followers)
                        .sort((a, b) => (b.numberOfViews - a.numberOfViews))
                        .map((follower) => {
                            return (
                                <div className='ShowFollowers-list'>
                                    <img src={pic2} alt='ShowFollowers-list-pic' className='ShowFollowers-list-pic'/>
                                    <p className='ShowFollowers-list-name'>{follower.name}</p>
                                    <img src={viewsIcon} alt='viewsIcon' className='ShowFollowers-list-views-icon'/>
                                    <p className='ShowFollowers-list-number-of-views'>{follower.numberOfViews}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    } else if (type === 'newestFollowers') {
        return (
            <div>
                {
                    Object.values(followers)
                        .reverse()
                        .map((follower) => {
                            return (
                                <div className='ShowFollowers-list'>
                                    <img src={pic2} alt='ShowFollowers-list-pic' className='ShowFollowers-list-pic'/>
                                    <p className='ShowFollowers-list-name'>{follower.name}</p>
                                    <img src={viewsIcon} alt='viewsIcon' className='ShowFollowers-list-views-icon'/>
                                    <p className='ShowFollowers-list-number-of-views'>{follower.numberOfViews}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    } else {
        return (
            <div>
                {
                    Object.values(followers)
                        .map((follower) => {
                            return (
                                <div className='ShowFollowers-list'>
                                    <img src={pic2} alt='ShowFollowers-list-pic' className='ShowFollowers-list-pic'/>
                                    <p className='ShowFollowers-list-name'>{follower.name}</p>
                                    <img src={viewsIcon} alt='viewsIcon' className='ShowFollowers-list-views-icon'/>
                                    <p className='ShowFollowers-list-number-of-views'>{follower.numberOfViews}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}

const getYearlyChart = async () => {
    const url = "http://www.justfortestjustfortest.ir/api/homepage/statistics/views";
    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('bearer_token')
        }
    })
    return await rawResponse.json();
}

const ShowChart = (props) => {
    const type = props.chartType;
    const [label, setLabel] = useState([]);
    const [views, setViews] = useState([]);

    useEffect(() => {
        getYearlyChart().then(res => {
            setLabel(res.months.reverse());
            setViews(res.views.reverse());
        })
    }, [])
    chartDataYearly.labels = label;
    chartDataYearly.datasets.map((chart) => {
        chart.data = views;
    })


    if (type === 'weekly') {
        return (
            <div>
                <ChartJs chartData={chartDataWeekly}/>
            </div>
        )
    } else if (type === 'monthly') {
        return (
            <div>
                <ChartJs chartData={chartDataMonthly}/>
            </div>
        )
    } else if (type === 'yearly') {
        return (
            <div>
                <ChartJs chartData={chartDataYearly}/>
            </div>
        )
    }
}
const ShowCatalogues = (props) => {
    const linkStyle = {
        textDecoration: "none",
        display: 'flex',
        color: 'black'
    };
    if (props.showType === 'newest') {
        return (
            <div>
                {
                    Object.values(catalogues)
                        .reverse()
                        .map((catalogue) => {
                            return (
                                <Link to={`/CataloguePage/${catalogue.id}`} style={linkStyle}>
                                    <div className='BusinessProfile-catalogues-list'>
                                        <img src={catalogue.pic} alt='catalogue-pic'
                                             className='BusinessProfile-catalogues-list-pic'/>
                                        <div className='BusinessProfile-catalogues-list-details'>
                                            <div className='BusinessProfile-catalogues-list-details-name'>
                                                <p className='BusinessProfile-catalogues-list-details-name-text'>{catalogue.name}</p>
                                            </div>
                                            <div className='BusinessProfile-catalogues-list-details-views'>
                                                <img src={viewsIcon} alt='view-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-number-text'>{catalogue.numberOfViews}</p>
                                                <img src={commentsIcon} alt='comments-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons icon2'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-comment-text'>{catalogue.numberOfComments}</p>
                                                <img src={dateIcon} alt='date-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons icon2'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-date-text'>{catalogue.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            )
                        })
                }
            </div>
        )
    } else if (props.showType === 'mostVisited') {
        return (
            <div>
                {
                    Object.values(catalogues)
                        .sort((a, b) => (b.numberOfViews - a.numberOfViews))
                        .map((catalogue) => {
                            return (
                                <Link to={`/CataloguePage/${catalogue.id}`} style={linkStyle}>
                                    <div className='BusinessProfile-catalogues-list'>
                                        <img src={catalogue.pic} alt='catalogue-pic'
                                             className='BusinessProfile-catalogues-list-pic'/>
                                        <div className='BusinessProfile-catalogues-list-details'>
                                            <div className='BusinessProfile-catalogues-list-details-name'>
                                                <p className='BusinessProfile-catalogues-list-details-name-text'>{catalogue.name}</p>
                                            </div>
                                            <div className='BusinessProfile-catalogues-list-details-views'>
                                                <img src={viewsIcon} alt='view-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-number-text'>{catalogue.numberOfViews}</p>
                                                <img src={commentsIcon} alt='comments-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons icon2'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-comment-text'>{catalogue.numberOfComments}</p>
                                                <img src={dateIcon} alt='date-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons icon2'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-date-text'>{catalogue.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                }
            </div>

        )
    } else {
        return (
            <div>
                {
                    Object.values(catalogues)
                        .map((catalogue) => {
                            return (
                                <Link to={`/CataloguePage/${catalogue.id}`} style={linkStyle}>
                                    <div className='BusinessProfile-catalogues-list'>
                                        <img src={catalogue.pic} alt='catalogue-pic'
                                             className='BusinessProfile-catalogues-list-pic'/>
                                        <div className='BusinessProfile-catalogues-list-details'>
                                            <div className='BusinessProfile-catalogues-list-details-name'>
                                                <p className='BusinessProfile-catalogues-list-details-name-text'>{catalogue.name}</p>
                                            </div>
                                            <div className='BusinessProfile-catalogues-list-details-views'>
                                                <img src={viewsIcon} alt='view-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-number-text'>{catalogue.numberOfViews}</p>
                                                <img src={commentsIcon} alt='comments-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons icon2'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-comment-text'>{catalogue.numberOfComments}</p>
                                                <img src={dateIcon} alt='date-icon'
                                                     className='BusinessProfile-catalogues-list-details-views-icons icon2'/>
                                                <p className='BusinessProfile-catalogues-list-details-views-date-text'>{catalogue.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                }
            </div>

        )
    }
}

const BusinessProfile = () => {


    const [clickedButtonType, setClickedButtonType] = useState('');
    const [clickedChartButtonType, setClickedChartButtonType] = useState('weekly')
    const [clickedFollowersButtonType, setClickedFollowersButtonType] = useState('')

    return (
        <div className='BusinessProfile'>
            <div className='BusinessProfile-catalogues'>
                <div className='BusinessProfile-catalogues-header'>
                    <p className='BusinessProfile-catalogues-header-text'>کاتالوگ‌ها</p>
                    <button
                        className={'BusinessProfile-catalogues-header-button' + ((clickedButtonType === 'mostVisited') ? ' active' : ' disable')}
                        onClick={() => setClickedButtonType('mostVisited')}>پربازدیدترین
                    </button>
                    <button
                        className={'BusinessProfile-catalogues-header-button' + ((clickedButtonType === 'newest') ? ' active' : ' disable')}
                        onClick={() => setClickedButtonType('newest')}>جدیدترین
                    </button>
                </div>
                <div className='BusinessProfile-catalogues-lists'>
                    <ShowCatalogues showType={clickedButtonType}/>
                </div>
            </div>
            <div className='BusinessProfile-details'>
                <div className='BusinessProfile-details-chart'>
                    <div className='BusinessProfile-details-chart-header'>
                        <p className='BusinessProfile-details-chart-header-text'>بازدید از پروفایل من</p>
                        <button
                            className={'BusinessProfile-details-chart-header-button' + ((clickedChartButtonType === 'weekly') ? ' chart-header-button-active' : ' disable')}
                            onClick={() => setClickedChartButtonType('weekly')}>هفتگی
                        </button>
                        <button
                            className={'BusinessProfile-details-chart-header-button' + ((clickedChartButtonType === 'monthly') ? ' chart-header-button-active' : ' disable')}
                            onClick={() => setClickedChartButtonType('monthly')}>ماهانه
                        </button>
                        <button
                            className={'BusinessProfile-details-chart-header-button' + ((clickedChartButtonType === 'yearly') ? ' chart-header-button-active' : ' disable')}
                            onClick={() => setClickedChartButtonType('yearly')}>سالانه
                        </button>
                    </div>
                    <div className='BusinessProfile-details-chart-body'>
                        <ShowChart chartType={clickedChartButtonType}/>
                    </div>
                </div>


                <div className='BusinessProfile-details-followers'>
                    <div className='BusinessProfile-details-followers-name'>
                        <div className='BusinessProfile-details-followers-name-header'>
                            <p className='BusinessProfile-details-followers-name-header-text'>دنبال کننده‌ها</p>
                            <button
                                className={'BusinessProfile-details-followers-name-header-button bdfnh-btn' + ((clickedFollowersButtonType === 'mostViewers') ? ' followers-name-header-button-active' : ' disable')}
                                onClick={() => setClickedFollowersButtonType('mostViewers')}>پربازدیدکننده‌ترین
                            </button>
                            <button
                                className={'BusinessProfile-details-followers-name-header-button' + ((clickedFollowersButtonType === 'newestFollowers') ? ' followers-name-header-button-active' : ' disable')}
                                onClick={() => setClickedFollowersButtonType('newestFollowers')}>جدیدترین
                            </button>
                        </div>
                        <div className='BusinessProfile-details-followers-name-body'>
                            <ShowFollowers showFollowersType={clickedFollowersButtonType}/>
                        </div>

                    </div>
                    <div className='BusinessProfile-details-followers-map'>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default BusinessProfile;