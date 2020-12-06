const ProjectList = ({ projects }) => {
    console.log(projects);
    //const [pname, setpname] = useState("");
  return (
    <section className="sort">
    <label htmlFor="">Project :</label>
    <select name="" id=""
        
    >
        <option value="">---Select---</option>
        {projects.map(project => <option key={project.id} value={project.name}>{project.name}</option>)}
    </select>
  </section>
  );
};

export default ProjectList;