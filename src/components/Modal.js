import React from "react";

const Modal = ({ handleModal, modalInfo }) => {
  return (
    <div className="modal-outer-wrapper">
      <div className="modal-inner-wrapper">
        <i className="fa fa-times" aria-hidden="true" onClick={handleModal}></i>

        <div className="modal-poster">
          <img src={modalInfo.Poster} alt={modalInfo.Title} />
        </div>
        <div className="modal-content">
          <h1>
            {modalInfo.Title} <i>({modalInfo.Year})</i>
          </h1>
          <h3 className="modal-rating">Rating: {modalInfo.imdbRating}</h3>
          <p className="modal-info">{modalInfo.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
