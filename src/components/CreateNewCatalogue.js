import React, {useEffect, useState} from 'react';
import add_file_icon from 'D:/Projects/React/catalogue-app/src/vuesax_linear_folder-add.svg'
import add_pic_icon from 'D:/Projects/React/catalogue-app/src/vuesax_linear_gallery-add.svg'
import add_text_icon from 'D:/Projects/React/catalogue-app/src/vuesax_linear_text.svg'
import add_voice_icon from 'D:/Projects/React/catalogue-app/src/vuesax_linear_music-square-add.svg'
import add_video_icon from 'D:/Projects/React/catalogue-app/src/vuesax_linear_video-add.svg'
import add_background_icon from 'D:/Projects/React/catalogue-app/src/vuesax_linear_brush.svg'
import display_vertical from 'D:/Projects/React/catalogue-app/src/vuesax_linear_arrow-down.svg'
import display_horizontal from 'D:/Projects/React/catalogue-app/src/vuesax_linear_arrow-left.svg'
import ShowAllPDF from "./ShowAllPDF";
import ShowSinglePagePDF from "./ShowSinglePagePDF";
import {toast} from "react-toastify";
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import ShowSinglePageImages from "./ShowSinglePageImages";
import ShowAllImages from "./ShowAllImages";
import ShowTexts from "./ShowTexts";

toast.configure()


function error_notify(message) {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function success_notify(message) {
    toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


const DisplayPDF = (props) => {
    if (props.displayDirection === 'horizontal' && props.pdf !== null) {
        return (
            <ShowSinglePagePDF pdf={props.pdf} ar_list={ar_list}/>
        )
    }
    if (props.displayDirection === 'vertical' && props.pdf !== null) {
        return (
            <ShowAllPDF pdf={props.pdf} ar_list={ar_list}/>
        )
    } else {
        return (
            <div/>
        )
    }

}

const DisplayImages = (props) => {
    if (props.displayDirection === 'horizontal') {
        return (
            <ShowSinglePageImages imageList={props.imageList}/>
        )
    }
    if (props.displayDirection === 'vertical' && props.imageList !== null) {
        return (
            <ShowAllImages imageList={props.imageList}/>
        )
    } else {
        return (
            <div/>
        )
    }
}

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


let ar_list = [];
let images_list = [];
let texts_list = [];
let catalogue_list = [];


const CreateNewCatalogue = () => {
        const forceUpdate = useForceUpdate();
        const [url, setUrl] = useState('');
        const [imageURL, setImageURL] = useState('');
        const [videoURL, setVideoURL] = useState('');
        const [displayDirection, setDisplayDirection] = useState('');
        const [insertTextEdit, setInsertTextEdit] = useState(false);
        const [insertImageEdit, setInsertImageEdit] = useState(false);
        const [insertVoiceEdit, setInsertVoiceEdit] = useState(false);
        const [insertVideoEdit, setInsertVideoEdit] = useState(false);


        const [insertImagesAdd, setInsertImagesAdd] = useState(false);
        const [imageAddURL, setImageAddURL] = useState('');

        const [insertTextsAdd, setInsertTextsAdd] = useState(false);

        const [insertText, setInsertText] = useState([]);


        const onFileChange = (e) => {
            const files = e.target.files;
            (files.length > 0) && setUrl(URL.createObjectURL(files[0]));
            document.getElementById('display-content').style.display = 'block';
        };

        const onImageChange = (e) => {
            const files = e.target.files;
            (files.length > 0) && setImageURL(URL.createObjectURL(files[0]));
        };


        const onImageAddChange = (e) => {
            const files = e.target.files;
            (files.length > 0) && setImageAddURL(URL.createObjectURL(files[0]));
        };
        // useEffect(() => {
        //     setImageAddURL(imageAddURL);
        // }, [imageAddURL]);

        const onVideoChange = (e) => {
            const files = e.target.files;
            (files.length > 0) && setVideoURL(URL.createObjectURL(files[0]));
        };


        const InsertText = () => {
            const [insertTextInput, setInsertTextInput] = useState('');
            const [insertNumPage, setInsertNumPage] = useState('');
            if (insertTextEdit === true)
                return (
                    <div className='Insert-text'>
                        <input
                            className='DisplayInsertText-input'
                            type='text'
                            placeholder={'متن خود را وارد کنید.'}
                            onChange={(e) => setInsertTextInput(e.target.value)}
                            defaultValue={insertTextInput}
                        />
                        <input
                            className='DisplayInsertText-input'
                            type='number'
                            min='0'
                            placeholder='شماره‌ی صفحه‌ی مورد نظر را وارد کنید.'
                            onChange={(e) => setInsertNumPage(e.target.value)}
                            defaultValue={insertNumPage}
                        />
                        <button className='DisplayInsertText-button' onClick={() => {
                            setInsertText(insertTextInput)
                            if (insertTextInput === '' || insertNumPage === '') {
                                error_notify('لطفا تمامی موارد را وارد کنید.')
                            } else {
                                ar_list.push({
                                        type: "text",
                                        my_text: insertTextInput,
                                        page_number: parseInt(insertNumPage),
                                        id: ar_list.length + 1
                                    }
                                )
                                document.getElementById('CreateNewCatalogue-edit-contents-insert-text-image').style.display = 'none';
                                success_notify('متن مورد نظر با موفقیت اعمال شد.')
                            }

                        }}>تایید
                        </button>
                        <button className='DisplayInsertText-button red-btn' onClick={() => {
                            document.getElementById('CreateNewCatalogue-edit-contents-insert-text-image').style.display = 'none';
                        }}>بستن
                        </button>
                    </div>
                );

             else
                return (
                    <div/>
                );


        }

        const InsertTextAdd = () => {
            const [insertTextInput, setInsertTextInput] = useState('');
            if (insertTextsAdd === true) {
                return (
                    <div className='Insert-text'>
                        <input
                            className='DisplayInsertText-input'
                            type='text'
                            placeholder={'متن خود را وارد کنید.'}
                            onChange={(e) => setInsertTextInput(e.target.value)}
                            defaultValue={insertTextInput}
                        />
                        <button className='DisplayInsertText-button' onClick={() => {
                            setInsertText(insertTextInput)
                            if (insertTextInput === '') {
                                error_notify('لطفا تمامی موارد را وارد کنید.')
                            } else {
                                texts_list.push({
                                        my_text: insertTextInput,
                                        id: texts_list.length + 1
                                    }
                                )
                                document.getElementById('CreateNewCatalogue-add-contents-insert-text').style.display = 'none';
                                success_notify('متن مورد نظر با موفقیت اعمال شد.')
                            }

                        }}>تایید
                        </button>
                        <button className='DisplayInsertText-button red-btn' onClick={() => {
                            document.getElementById('CreateNewCatalogue-add-contents-insert-text').style.display = 'none';
                        }}>بستن
                        </button>
                    </div>
                )

            } else if (insertTextsAdd === false) {
                return (
                    <div/>
                )
            }

        }

        const InsertImage = () => {
            const [insertNumPage, setInsertNumPage] = useState('');
            if (insertImageEdit === true) {
                return (
                    <div className='Insert-image'>
                        <input
                            className='DisplayInsertImage-input'
                            type='file'
                            accept='image'
                            onChange={onImageChange}
                        />
                        <input
                            className='DisplayInsertText-input'
                            type='number'
                            min='0'
                            placeholder='شماره‌ی صفحه‌ی مورد نظر را وارد کنید.'
                            onChange={(e) => setInsertNumPage(e.target.value)}
                            defaultValue={insertNumPage}
                        />
                        <button className='DisplayInsertText-button' onClick={() => {
                            if (imageURL === '' || insertNumPage === '') {
                                error_notify('لطفا تمامی موارد را وارد کنید.')
                            } else {
                                ar_list.push({
                                    type: "image",
                                    page_number: parseInt(insertNumPage),
                                    imgURL: imageURL,
                                    id: ar_list.length + 1
                                })
                                document.getElementById('CreateNewCatalogue-edit-contents-insert-text-input').style.display = 'none';
                                success_notify('عکس مورد نظر با موفقیت اعمال شد.')
                            }
                        }}>تایید
                        </button>
                        <button className='DisplayInsertText-button red-btn' onClick={() => {
                            document.getElementById('CreateNewCatalogue-edit-contents-insert-text-input').style.display = 'none';
                        }}>بستن
                        </button>
                    </div>
                )

            } else if (insertImageEdit === false) {
                return (
                    <div/>
                )
            }

        }

        const InsertImageAdd = () => {
            if (insertImagesAdd === true) {
                return (
                    <div className='Insert-image'>
                        <input
                            className='DisplayInsertImage-input'
                            type='file'
                            accept='image'
                            onChange={onImageAddChange}
                        />
                        <button className='DisplayInsertText-button' onClick={(e) => {
                            if (imageAddURL === '') {
                                e.preventDefault();
                                error_notify('لطفا عکس خود را وارد کنید.')
                            } else {

                                images_list.push({
                                    imageURL: imageAddURL,
                                    id: images_list.length + 1
                                })
                                console.log(images_list)
                                forceUpdate()
                                document.getElementById('CreateNewCatalogue-add-contents-insert-images').style.display = 'none';
                                success_notify('عکس مورد نظر با موفقیت اعمال شد.')
                            }
                        }}
                        >تایید
                        </button>
                        <button className='DisplayInsertText-button red-btn' onClick={() => {
                            document.getElementById('CreateNewCatalogue-add-contents-insert-images').style.display = 'none';
                        }}>بستن
                        </button>
                    </div>
                )

            } else if (insertImagesAdd === false) {
                return (
                    <div/>
                )
            }

        }

        const InsertVideo = () => {
            const [insertNumPage, setInsertNumPage] = useState('');
            if (insertVideoEdit === true) {
                return (
                    <div className='Insert-video'>
                        <input
                            className='DisplayInsertImage-input video-input-style'
                            type='file'
                            accept='video/mp4,video/x-m4v,video/*'
                            onChange={onVideoChange}
                        />
                        <input
                            className='DisplayInsertText-input'
                            type='number'
                            min='0'
                            placeholder='شماره‌ی صفحه‌ی مورد نظر را وارد کنید.'
                            onChange={(e) => setInsertNumPage(e.target.value)}
                            defaultValue={insertNumPage}
                        />
                        <button className='DisplayInsertText-button' onClick={() => {
                            if (videoURL === '' || insertNumPage === '') {
                                error_notify('لطفا تمامی موارد را وارد کنید.')
                            } else {
                                ar_list.push({
                                    type: "video",
                                    page_number: parseInt(insertNumPage),
                                    videoURL: videoURL,
                                    id: ar_list.length + 1
                                })
                                document.getElementById('CreateNewCatalogue-edit-contents-insert-video-input').style.display = 'none';
                                success_notify('ویدیوی مورد نظر با موفقیت اعمال شد.')
                            }
                        }}>تایید
                        </button>
                        <button className='DisplayInsertText-button red-btn' onClick={() => {
                            document.getElementById('CreateNewCatalogue-edit-contents-insert-video-input').style.display = 'none';
                        }}>بستن
                        </button>
                    </div>
                )
            } else return <div/>

        }


        const clickHandler = () => {
            catalogue_list.push({
                pdf: url
            });
            catalogue_list.push({
                ar_list: ar_list
            });
            catalogue_list.push({
               images_list: images_list
            })
            catalogue_list.push({
                texts_list: texts_list
            })
            console.log(catalogue_list);
            localStorage.setItem('newCatalogue', catalogue_list);
            console.log(localStorage.getItem(localStorage.key(2)));
        }


        const [audioDetails, setAudioDetails] = useState({
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0
            }
        });
        const [audioURL, setAudioURL] = useState([]);

        const InsertVoice = () => {


            const handleAudioStop = (data) => {
                console.log(data)
                setAudioDetails(data);
            }

            useEffect(() => {
                setAudioURL(audioURL)
                // console.log(audioURL);
            }, [audioURL]);


            const handleAudioUpload = (file) => {
                setAudioURL(file);
            }


            const handleCountDown = (data) => {
                console.log(data);
            }

            const handleReset = () => {
                const reset = {
                    url: null,
                    blob: null,
                    chunks: null,
                    duration: {
                        h: 0,
                        m: 0,
                        s: 0
                    }
                };
                setAudioDetails(reset);
            }

            const [insertNumPage, setInsertNumPage] = useState('');
            if (insertVoiceEdit === true) {
                return (
                    <div className='Insert-voice'>

                        <Recorder
                            record={true}
                            title={"New recording"}
                            audioURL={audioDetails.url}
                            showUIAudio
                            handleAudioStop={data => handleAudioStop(data)}
                            handleAudioUpload={data => handleAudioUpload(data)}
                            handleCountDown={data => handleCountDown(data)}
                            handleReset={() => handleReset()}
                            mimeTypeToUseWhenRecording={`audio/webm`}
                        />

                        <input
                            className='DisplayInsertText-input'
                            type='number'
                            min='0'
                            placeholder='شماره‌ی صفحه‌ی مورد نظر را وارد کنید.'
                            onChange={(e) => setInsertNumPage(e.target.value)}
                            defaultValue={insertNumPage}
                        />
                        <button className='DisplayInsertText-button' onClick={() => {
                            if (audioDetails === {} || insertNumPage === '') {
                                error_notify('لطفا تمامی موارد را وارد کنید.')
                            } else {
                                ar_list.push({
                                    type: "voice",
                                    page_number: parseInt(insertNumPage),
                                    audioURL: audioDetails.url,
                                    audioData: audioDetails,
                                    id: ar_list.length + 1
                                })
                                document.getElementById('CreateNewCatalogue-edit-contents-insert-voice-input').style.display = 'none';
                                success_notify('صدای ضبط شده‌ی مورد نظر با موفقیت اعمال شد.')
                            }
                        }}>تایید
                        </button>
                        <button className='DisplayInsertText-button red-btn' onClick={() => {
                            document.getElementById('CreateNewCatalogue-edit-contents-insert-voice-input').style.display = 'none';
                        }}>بستن
                        </button>

                    </div>
                )
            } else return <div/>
        }


        return (
            <div className='CreateNewCatalogue'>
                <div className='CreateNewCatalogue-catalogue'>
                    <div id='display-content'>
                        <DisplayPDF pdf={url} displayDirection={displayDirection} ar_list={ar_list}/>
                        <ShowTexts texts_list={texts_list}/>
                        <DisplayImages displayDirection={displayDirection} imageList={images_list}/>
                    </div>
                </div>
                <div className='CreateNewCatalogue-edit'>
                    <div className='CreateNewCatalogue-edit-contents'>

                        <div className='CreateNewCatalogue-edit-contents-add'>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                <img src={add_file_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text'>فایل</p>
                            </label>
                            <input type="file" accept=".pdf" onChange={onFileChange} id="file-upload"/>

                            <button className='CreateNewCatalogue-edit-contents-add-content-button'
                                    onClick={() => {
                                        setInsertTextsAdd(true);
                                        if (document.getElementById('CreateNewCatalogue-add-contents-insert-text').style.display === 'none')
                                            document.getElementById('CreateNewCatalogue-add-contents-insert-text').style.display = 'block';
                                    }}>
                                <img src={add_text_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>متن</p>
                            </button>


                            {/*<label htmlFor="file-upload2" className="custom-file-upload">*/}
                            {/*    <img src={add_pic_icon} alt='add-file'*/}
                            {/*         className='CreateNewCatalogue-edit-contents-add-content-file-pic'/>*/}
                            {/*    <p className='CreateNewCatalogue-edit-contents-add-content-file-text'>عکس</p>*/}
                            {/*</label>*/}
                            {/*<input type="file" accept=".image/png" id="file-upload2"/>*/}

                            <button className='CreateNewCatalogue-edit-contents-add-content-button' onClick={() => {
                                setInsertImagesAdd(true);
                                if (document.getElementById('CreateNewCatalogue-add-contents-insert-images').style.display === 'none')
                                    document.getElementById('CreateNewCatalogue-add-contents-insert-images').style.display = 'block';
                            }}>
                                <img src={add_pic_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>عکس</p>
                            </button>

                        </div>

                        <div id='CreateNewCatalogue-add-contents-insert-images'>
                            <InsertImageAdd/>
                        </div>
                        <div id='CreateNewCatalogue-add-contents-insert-text'>
                            <InsertTextAdd/>
                        </div>


                        <p className='CreateNewCatalogue-edit-contents-header cech-margin'>واقعیت افزوده</p>
                        <div className='CreateNewCatalogue-edit-contents-add'>
                            <button className='CreateNewCatalogue-edit-contents-add-content-button' onClick={() => {
                                setInsertTextEdit(true);
                                if (document.getElementById('CreateNewCatalogue-edit-contents-insert-text-image').style.display === 'none')
                                    document.getElementById('CreateNewCatalogue-edit-contents-insert-text-image').style.display = 'block';
                            }}>
                                <img src={add_text_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>متن</p>
                            </button>


                            <button className='CreateNewCatalogue-edit-contents-add-content-button' onClick={() => {
                                setInsertImageEdit(true);
                                if (document.getElementById('CreateNewCatalogue-edit-contents-insert-text-input').style.display === 'none')
                                    document.getElementById('CreateNewCatalogue-edit-contents-insert-text-input').style.display = 'block';
                            }}>
                                <img src={add_pic_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>عکس</p>
                            </button>


                            <input type="file" accept=".image/png" id="file-upload2"/>


                            <button className='CreateNewCatalogue-edit-contents-add-content-button' onClick={() => {
                                setInsertVoiceEdit(true);
                                if (document.getElementById('CreateNewCatalogue-edit-contents-insert-voice-input').style.display === 'none')
                                    document.getElementById('CreateNewCatalogue-edit-contents-insert-voice-input').style.display = 'block';
                            }}>
                                <img src={add_voice_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>صدا</p>
                            </button>
                        </div>
                        <div className='CreateNewCatalogue-edit-contents-add'>
                            <button className='CreateNewCatalogue-edit-contents-add-content-button' onClick={() => {
                                setInsertVideoEdit(true);
                                if (document.getElementById('CreateNewCatalogue-edit-contents-insert-video-input').style.display === 'none')
                                    document.getElementById('CreateNewCatalogue-edit-contents-insert-video-input').style.display = 'block';
                            }}>
                                <img src={add_video_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>ویدیو</p>
                            </button>
                        </div>


                        <div id='CreateNewCatalogue-edit-contents-insert-text-image'>
                            <InsertText/>
                        </div>
                        <div id='CreateNewCatalogue-edit-contents-insert-text-input'>
                            <InsertImage/>
                        </div>

                        <div id='CreateNewCatalogue-edit-contents-insert-voice-input'>
                            <InsertVoice/>
                        </div>

                        <div id='CreateNewCatalogue-edit-contents-insert-video-input'>
                            <InsertVideo/>
                        </div>

                        <p className='CreateNewCatalogue-edit-contents-header cech-margin'>طراحی</p>
                        <div className='CreateNewCatalogue-edit-contents-add'>
                            <button className='CreateNewCatalogue-edit-contents-add-content-button'>
                                <img src={add_background_icon} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>پس‌زمینه</p>
                            </button>
                        </div>

                        <p className='CreateNewCatalogue-edit-contents-header cech-margin'>چینش صفحات</p>
                        <div className='CreateNewCatalogue-edit-contents-add'>
                            <button className='CreateNewCatalogue-edit-contents-add-content-button'
                                    onClick={() => setDisplayDirection('horizontal')}>
                                <img src={display_horizontal} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'/>
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>افقی</p>
                            </button>
                            <button className='CreateNewCatalogue-edit-contents-add-content-button'
                                    onClick={() => setDisplayDirection('vertical')}>
                                <img src={display_vertical} alt='add-file'
                                     className='CreateNewCatalogue-edit-contents-add-content-file-pic-button'
                                />
                                <p className='CreateNewCatalogue-edit-contents-add-content-file-text-button'>عمودی</p>
                            </button>
                        </div>


                        <div className='CreateNewCatalogue-edit-contents-button-group'>
                            <button className='CreateNewCatalogue-edit-contents-buttons btn1' onClick={clickHandler}>
                                انتشار
                            </button>
                            <button className='CreateNewCatalogue-edit-contents-buttons btn2'>
                                ذخیره پیش‌نویس
                            </button>
                            <button className='CreateNewCatalogue-edit-contents-buttons btn3'>
                                چاپ
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
;

export default CreateNewCatalogue;