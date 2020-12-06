import projectApi from '../services/projectApi';
//let currentProjectId = 0;
 
export async function addNew(projectName){

    const newProject= {
        id: 0,
        name: projectName
    };
    await projectApi.save(newProject);
    const action = { type : 'PROJECT_ADD_NEW', payload : newProject } ;
    return action;
}

export async function loadP(){
    const projectslist = await projectApi.getAll();
    const action = { type : 'PROJECT_INIT', payload : projectslist } ;
    return action;
} 

