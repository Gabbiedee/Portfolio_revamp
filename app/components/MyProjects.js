import styles from "./MyProjects.module.css";

const MyProjects = ({ projects }) => {
  return (
    <div className={styles.newprojects}>
      {projects
        .filter((project) => project.id < 4)
        .map((filteredProject) => (
          <div key={filteredProject.id}>
            
            {filteredProject.projectImg}
            <li>{filteredProject.projectName}</li>
            <li>{filteredProject.projectBrief}</li>
          </div>
        ))}
    </div>
  );
};

export default MyProjects;
