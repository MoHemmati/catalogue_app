import React, {useEffect, useState} from 'react';
import {Editor} from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {convertToHTML} from 'draft-convert';
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const TextEditorModal = (props) => {
    const showHideClassName = props.show ? "modal-editor display-block-editor" : "modal-editor display-none-editor";
    const [sendRecommendationTo, setSendRecommendationTo] = useState('');
    const [type, setType] = useState('');


    console.log(props.type)


    // const [run,setRun] = useState(false);


    // useEffect(() => {
    //     setType(props.type);
    //     if (typeof props.sendTo !== 'undefined'){
    //         setSendRecommendationTo(props.sendTo);
    //     }
    //     console.log(type);
    //     console.log(sendRecommendationTo);
    // })




    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }

    const TextEditor = () => {
        return (
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                editorStyle={{ height: "450px" }}
            />
        )
    }

    return (
        <div className={showHideClassName} onClick={props.handleClose}>
            <section className="modal-main-editor" onClick={event => event.stopPropagation()}>
                <div className='modal-main-header-editor'>
                    <button onClick={props.handleClose} className='modal-main-close-button-editor'/>
                </div>
                <div className='modal-main-body-editor'>
                    <TextEditor/>
                </div>
                <div className='modal-main-submit-editor'>
                    <button className='modal-main-submit-btn-editor' onClick={() => {
                        console.log(convertedContent)
                    }}>ارسال
                    </button>
                </div>
            </section>
        </div>
    );
};
export default TextEditorModal

