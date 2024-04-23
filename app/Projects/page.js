import styles from "./Projects.module.css";
import MyImages from "../components/MyImages";
import Link from "next/link";
const Projects = () => {
    const projects = [
        { id: 1,
          projectImg:<MyImages projectImgs={"/img9.png"} />,
          projectName: <Link href="https://mealssitewithreact.netlify.app/" ><p>Meal Site</p></Link>,
          projectBrief: "This is a meal site created with react with the help of a tutorial by Maxmillian Schmuller on Learning React.",
      
        },
        { id: 2,
          projectImg:<MyImages projectImgs={"/img8.png"} />,
          projectName: <Link href="https://moviessearchwithreact.netlify.app/" ><p>Movie Site</p></Link>,
          projectBrief: "This is a fetch movie details site for certain movies created with react, the movies were fetched from OMDIAPI.",
      
        },
        { id: 3,
          projectImg: <MyImages projectImgs={"/img3.jpg"} />,
          projectName: <Link href="https://gabbiedee.github.io/game/" ><p>Number Guesser Game</p></Link>,
          projectBrief: "This is a responsive number guesser game, built with html, skeleton css, and javascript for functionality",
      
        },
        { id: 4,
          projectImg: <MyImages projectImgs={"/img4.jpg"} />,
          projectName: <Link href="https://gabbiedee.github.io/New_api_project/" ><p>Fetch Project</p></Link>,
          projectBrief: "This is a responsive 2 page website to fetch data from the Json placholder api and render it in a tabular form",
      
        },
        { id: 5,
          projectImg:<MyImages projectImgs={"/img5.jpg"} />,
          projectName: <Link href="https://spectacular-parfait-a2a49a.netlify.app/" ><p>Loan Calculator</p></Link>,
          projectBrief: "This is one of the projects from the Brad Traversy Course, coded along with him, using HTML,Materialise CSS and Javascript",
      
        },
        { id: 6,
          projectImg:<MyImages projectImgs={"/img6.jpg"} />,
          projectName: <Link href="https://lucky-moonbeam-27fbfb.netlify.app/" ><p>Task List</p></Link>,
          projectBrief: "This is one of the projects from the Brad Traversy Course, coded along with him, using HTML, Boostrap and Javascript",
      
        },
        { id: 7,
          projectImg:<MyImages projectImgs={"/img7.png"} />,
          projectName: <Link href="https://itsgabbies-hotel-site.netlify.app" ><p>Hotel Site</p></Link>,
          projectBrief: "This is an hotel site created with just HTML, CSS and JS for the toggle button.",
      
        },
        { id: 8,
          projectImg:<MyImages projectImgs={"/img2.jpg"} />,
          projectName: <Link href="https://gabbiedee.github.io/sidehustlepj/" ><p>Sign Up Form</p></Link>,
          projectBrief: "This is a responsive sign up form landing page, built with html, css and javascript to set data in the local storage",
      
        },
        { id: 9,
          projectImg:<MyImages projectImgs={"/img1.jpg"} />,
          projectName: <Link href="https://gabbiedee.github.io/side_sushi/" ><p>Sushi Resturant</p></Link>,
          projectBrief: "This is a responsive resturant prototype website, built with html, css and a little javascript",
      
        },
        ]
  return (
    <div className={styles.projects}>
    {projects.map((Project) => (
        <div className={styles.newprojects}>
          {Project.projectImg}
          <li>{Project.projectName}</li>
          <li>{Project.projectBrief}</li>
        </div>
      ))}
  </div>
  )
}

export default Projects