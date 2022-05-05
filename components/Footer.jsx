import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/smoothie-galery.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE FIRST WEALTH IS HEALTH.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
          2911 Blue Aster Blvd, Sun Prairie, 
            <br /> WI, 53590
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
          107 Church St,  
            <br /> GA, 30060
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 6:00 a.m. – 2:00 p.m.
          </p>
          <p className={styles.text}>
            SUNDAY
            <br /> 6:00 a.m. – 2:00 p.m.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;