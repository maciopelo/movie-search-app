import React from "react";

const Modal = ({ handleModal, clickedModalInfo }) => {
  return (
    <div className="modal-outer-wrapper">
      <div className="modal-inner-wrapper">
        <i className="fa fa-times" aria-hidden="true" onClick={handleModal}></i>

        <div className="modal-poster">
          <img
            src={clickedModalInfo[0].Poster}
            alt={clickedModalInfo[0].Title}
          />
        </div>
        <div className="modal-content">
          <h1>
            {clickedModalInfo[0].Title} <i>({clickedModalInfo[0].Year})</i>
          </h1>
          <h3 className="modal-rating">
            Rating: {clickedModalInfo[0].imdbRating}
          </h3>
          <p className="modal-info">{clickedModalInfo[0].Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
