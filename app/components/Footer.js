import styles from "./Footer.module.css";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>&copy; itsgabbies 2024 built with NEXTJS</p>
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
export default Footer;