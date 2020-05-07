import React from "react";
import Result from "./Result";
import Modal from "./Modal";

const Results = (props) => {
  const results = props.results.map((result) => (
    <Result
      key={result.imdbID}
      result={result}
      handleModal={props.handleModal}
    />
  ));
  return (
    <section className="results">
      {results}
      {props.isModal && (
        <Modal modalInfo={props.modalInfo} handleModal={props.handleModal} />
      )}
    </section>
  );
};

export default Results;
