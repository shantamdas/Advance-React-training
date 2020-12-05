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
    <label htmlFor="">Descending ? :</label>
    <input type="checkbox" name="" id="" />
  </section>
  );
};

export default ProjectList;