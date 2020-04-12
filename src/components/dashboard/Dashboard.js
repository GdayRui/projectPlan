import React, { Component } from "react";
import { connect } from "react-redux";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
