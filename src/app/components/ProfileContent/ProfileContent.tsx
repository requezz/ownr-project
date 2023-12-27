import React from "react";
import styles from "./ProfileContent.module.scss";
import { UserOutlined } from "@ant-design/icons";

const ProfileContent = () => {
    return (
        <section>
            <div className={styles.profileContainer}>
                <div className={styles.userData}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.avatar}>
                            <UserOutlined />
                        </div>
                        <span className={styles.name}>Name: Ivan</span>
                        <span className={styles.surname}>Surname: Ivanov</span>
                        <span className={styles.login}>Login: name@domain.zone</span>
                        <span className={styles.password}>Password: password</span>
                        <span className={styles.phone}>Phone: 8 (777) 777-77-77</span>
                        <span className={styles.email}>Email: ivanivanov@mail.ru</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileContent;
