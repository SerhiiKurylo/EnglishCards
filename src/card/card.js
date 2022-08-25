import React from "react";

import "./card.css";

const Card = ({ id, phrasalVerb, verb, sentense, thema }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{id}</span>
        <span>{thema.eng}</span>
      </div>
      <div className="card-main">
        <div className="verbs">
          <div className="verb">{phrasalVerb.eng}</div>
          <div className="verb-trans">{phrasalVerb.trans}</div>
          <div className="verb">{verb.eng}</div>
          <div className="verb-trans">{verb.trans}</div>
        </div>
        <div className="sentense">{sentense.eng}</div>
      </div>
    </div>
  );
};

export default Card;
