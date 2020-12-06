import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/projects';

async function getAll(){
    const response = await axios.get(serviceEndPoint);
    return response.data;
}

async function getById(id){
    const response = await axios.get(`${serviceEndPoint}/${id}`);
    return response.data;
}

async function save(projectData){
    if (projectData.id === 0 ){
        const response = await axios.post(serviceEndPoint, projectData);
        return response.data;
    } else {
        const response = await axios.put(`${serviceEndPoint}/${projectData.id}`, projectData);
        return response.data;
    }
}

async function remove(projectData){
    const response = await axios.delete(`${serviceEndPoint}/${projectData.id}`);
    return response.data;
}

const bugApi = { getAll, getById, save, remove };

export default bugApi;

