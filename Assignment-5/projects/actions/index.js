import projectApi from '../services/projectApi';
let currentProjectId = 0;
 
export const addNew = (projectName) => {
    const action = {
        type: "PROJECT_ADD_NEW",
        payload: {
        id: ++currentProjectId,
        name: projectName,
        createdAt: new Date()
        }
    };
    return action;
}

export async function loadP(){
    const projectslist = await projectApi.getAll();
    const action = { type : 'PROJECT_INIT', payload : projectslist } ;
    return action;
} 

