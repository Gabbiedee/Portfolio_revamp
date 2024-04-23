import styles from "./Intro.module.css";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
const Intro = () => {

    
  return (
    <div className={styles.hero1}
    >
        <div className={styles.profileText}><h1>Hi, Introducing me, <br></br>A Software-Developer </h1>
        <p>I am a meticulous front-end web developer that loves creating
          responsive website design. I am passionate about learning and
          development with a desire to apply skills to develop quality
          solutions. With an emphasis on scalable and well- documented code, I
          look forward to working collaboratively on projects in an
          organisation..</p>
        <Button children={<Link href="/Projects">My Projects</Link>}/>
        </div>
        <Image className={styles.profileImage}
        src="/profile.JPG"
        alt="Picture of the author"
        width={300}
        height={300}
        quality={100}/>

    </div>
  )
}

export default Intro