import React from 'react';

const ShowTexts = (props) => {
    const textList = props.texts_list;
    return (
        <div className='ShowTextsContents'>
            <hr className='ShowSinglePagePDF-hr'/>
            <div className='ShowTexts'>

                {
                    textList.map((each_text) => {
                        if (each_text !== ''){
                            return(
                                <div className='ShowTexts-inserted-text' key={each_text.id}>
                                    <p className='ShowTexts-inserted-text-p'>{each_text.my_text}</p>
                                </div>
                            )
                        }
                        else return <div/>
                    })
                }
            </div>
        </div>
    );
};

export default ShowTexts;