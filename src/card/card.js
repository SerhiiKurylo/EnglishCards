import React from "react";

import "./card.css";

const Card = ({ id, phrasalVerb, verb, sentense, thema, translate }) => {
  const cardHeaderColor = `card-header ${
    translate ? "card-header-translate" : "card-header-eng"
  }`;

  return (
    <div className="card">
      <div className={cardHeaderColor}>
        <span>{id}</span>
        <span>{translate ? thema.uk : thema.eng}</span>
      </div>
      <div className="card-main">
        <div className="verbs">
          <div className="verb">
            {translate ? phrasalVerb.uk : phrasalVerb.eng}
          </div>
          <div className="verb-trans">
            {translate ? null : phrasalVerb.trans}
          </div>
          <div className="verb">{translate ? verb.uk : verb.eng}</div>
          <div className="verb-trans">{translate ? null : verb.trans}</div>
        </div>
        <div className="sentense">{translate ? sentense.uk : sentense.eng}</div>
      </div>
    </div>
  );
};

export default Card;
