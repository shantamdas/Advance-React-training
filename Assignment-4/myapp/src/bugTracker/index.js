import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bugActionCreators from "./actions";

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import ProjectList from './views/ProjectList';


const BugTracker = ({ bugs, projects, toggle, remove, removeClosed, addNew }) => (
  <Fragment>
    <h3>Bug Tracker</h3>
    <hr />
    <BugStats bugs={bugs} />
    <BugSort />
    <ProjectList projects={projects} />
    <BugEdit addNew={addNew} />
    <BugList {...{ bugs, toggle, remove, removeClosed }} />
  </Fragment>
);

function mapStatToProps(storeState){
  const bugs = storeState.bugState;
  return {bugs : bugs, projects: storeState.projectState };
}

function mapDispatchToProps(dispatch){
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
  return bugActionDispatchers;
}

export default connect(
  mapStatToProps,
  mapDispatchToProps)
  (BugTracker);
