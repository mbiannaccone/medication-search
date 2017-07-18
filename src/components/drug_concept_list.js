import React from 'react';
import DrugConceptItem from './drug_concept_item';

const DrugConceptList = (props) => {
  if (!props.validConcept) {
    return (
      <div>
        <div>Concepts:</div>
        <div>No results found.</div>
      </div>
    );
  }

  const drugs = props.drugConcepts.map((drug, index) => {
    return (
      <DrugConceptItem
        onDrugSelect={props.onDrugSelect}
        key={index}
        drug={drug} />
    );
  });

  return (
    <ul className="col-md-6 list-group">
      Concepts:
      {drugs}
    </ul>
  );
};

export default DrugConceptList;
