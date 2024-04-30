import styles from "./Navbar.module.css";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbrand}>
            <h2>Gabbies</h2>
          
            <ul className={styles.navlinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Projects">Projects</Link></li>
            </ul>
    
        </div>
        
        <div className={styles.socials}>
        <ul>
                <li><Link href="mailto:akingbojudolly@gmail.com"><MdEmail/></Link></li>
                <li><Link href="tel:+234-903-849-6949"><PiPhoneCallFill /></Link></li>
                <li><Link href="https://www.linkedin.com/in/dolapo-akingboju/"><FaLinkedin /></Link></li>
                <li><Link href="https://github.com/Gabbiedee"><FaGithub /></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar