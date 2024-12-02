import React from "react";
import styles from "./Maintenance.module.css";
import space from "./../assests/space.png";

const Maintenance: React.FC = () => {
  return (
    <div className={styles.maintenanceContainer}>
      <img
        src={space}
        alt="StorkyApp Under Maintenance"
        className={styles.image}
      />
      <h1 className={styles.message}>
        StorkyApp Is Currently Under Maintenance
      </h1>
      <p className={styles.subMessage}>We should be back shortly</p>
    </div>
  );
};
export default Maintenance;
