import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActionCreators from './actions';

const Projects = ({ projects, addNew, loadP }) => {
  useEffect(() =>{
    loadP();
  }, [loadP]);
  const [newProjectName, setNewProjectName] = useState("");
  return (
    <div>
      <h3>Projects</h3>
      <hr/>
      <label>Project Name : </label>
      <input
        type="text"
        onChange={evt => setNewProjectName(evt.target.value)}
      />
      <input
        type="button"
        value="Add New"
        onClick={() => addNew(newProjectName)}
      />
      <div>
        {projects.map(project => (
          <span key={project.id}> [{project.name}] </span>
        ))}
      </div>
    </div>
  );
};

// function mapStatToProps(storeState){
//   const projects = storeState.projectState;
//   return {projects : projects};
// }

// function mapDispatchToProps(dispatch){
//   const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
//   return projectActionDispatchers;
// }

export default connect (function (storeState){
  return { projects : storeState.projectState };
},  function(dispatch){
  return bindActionCreators(projectActionCreators, dispatch)
})(Projects);
