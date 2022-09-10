import React from 'react';

const ShowAllImages = (props) => {
    let imagesList;
    imagesList = props.imageList;
    console.log(imagesList)
    return (
        <div className='ShowAllImages'>
            <hr className='ShowSinglePagePDF-hr'/>
            <div className='ShowImages-all'>
                {imagesList.map((each_image) => {
                    if (each_image.imageURL !== '') {
                        return (
                            <div className='ShowTexts-inserted-all-images' key={each_image.id}>
                                <img src={each_image.imageURL} className='ShowTexts-inserted-image-img'
                                     alt='insertedImage'/>
                            </div>
                        )
                    } else return <div/>
                })}
            </div>
        </div>
    );
};

export default ShowAllImages;