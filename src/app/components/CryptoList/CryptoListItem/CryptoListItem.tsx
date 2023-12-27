import React from "react";
import { CryptoData } from "@/app/components/CryptoList/CryptoList";
import styles from "./CryptoListItem.module.scss";

interface CryptoListItemProps {
    crypto: CryptoData;
}

const CryptoListItem: React.FC<CryptoListItemProps> = (props) => {
    const { crypto } = props;
    return (
        <div className={styles.cryptoContainer}>
            <img
                src={crypto.image}
                alt="Изображение"
                className={styles.cryptoImage}
            />
            <div className="cryptoListData">
                <div className={styles.name}>Name: {crypto.name}</div>
                <div className={styles.price}>Price: {crypto.current_price}</div>
            </div>
        </div>
    );
}

export default CryptoListItem;
