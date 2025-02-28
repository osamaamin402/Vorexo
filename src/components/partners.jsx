import React from "react";

export const Partners = (props) => {
  return (
    <div id="partners" className="text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Partners</h2>
          <p>
          We proudly partner with 110+ leading companies, driving excellence in IT services, 
          job placements, and training to create endless opportunities.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
