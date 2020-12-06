import bugApi from '../services/bugApi';
export async function addNew(bugName){
  const newBug = {
    id: 0 , //wil be taken care by server
    name: bugName,
    isClosed: false,
    createdAt: new Date(),
    "project": "Bug Tracker"
  };
  await bugApi.save(newBug);
  const action = { type : 'BUG_ADD_NEW', payload : newBug } ;
  return action;
} 