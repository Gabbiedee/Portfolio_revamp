import styles from "./Skill.module.css";
const Skill = ({ skills }) => {
  return (
    <div className={styles.skills}>
      <h1>My Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillSet} 
          >
            <h3 >{skill.Icon}</h3>
            <li>{skill.Technology}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
