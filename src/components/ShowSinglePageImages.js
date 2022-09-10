import React, {useState} from 'react';
import ReactPaginate from "react-paginate";

const ShowSinglePageImages = (props) => {

    let imageList = props.imageList;

    const [picturesPageNumber, setPicturesPageNumber] = useState(0);
    const picturePerPage = 1;
    const pictureVisited = picturesPageNumber * picturePerPage;
    const picPageCount = imageList.length;
    const changePicturePage = ({selected}) => {
        setPicturesPageNumber(selected);
    };
    return (
        <div className='ShowSinglePageImages'>
            {
                imageList.slice(pictureVisited, pictureVisited + picturePerPage)
                    .map((each_image) => {
                        return (
                            <div className='ShowTexts-inserted-single-images' key={each_image.id}>
                                <img src={each_image.imageURL} alt='inserted-image' className='ShowTexts-inserted-all-images-img'/>
                            </div>
                        )
                    })
            }
            <ReactPaginate
                previousLabel={"قبلی"}
                nextLabel={"بعدی"}
                pageCount={picPageCount}
                onPageChange={changePicturePage}
                containerClassName={"ShowTexts-inserted-single-images-buttons"}
                previousLinkClassName={"ShowTexts-inserted-single-images-buttons-previous-button"}
                nextLinkClassName={"ShowTexts-inserted-single-images-buttons-next-button"}
                disabledClassName={"ShowTexts-inserted-single-images-buttons-disabled"}
                activeClassName={"ShowTexts-inserted-single-images-buttons-active"}
            />
        </div>
    );
};

export default ShowSinglePageImages;