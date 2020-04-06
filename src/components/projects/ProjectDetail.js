import React from "react";

const ProjectDetail = props => {
  console.log("props", props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            We supply an easy to use setup pack that makes organise your content
            easy. Or if you have an existing website we can copy from there.
          </p>
        </div>
        <div className="card-action">
          <p className="grey-text">Posted by Rui</p>
          <p className="grey-text">1 April, 2m</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
