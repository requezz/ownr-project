"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoListItem from "@/app/components/CryptoList/CryptoListItem/CryptoListItem";
import styles from "./CryptoList.module.scss";

export interface CryptoData {
  id: string;
  name: string;
  current_price: number;
  image: string;
}

const CryptoList: React.FC = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`
                );
                setCryptoData((prevData) => [...prevData, ...response.data]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const fetchMoreData = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <section>
            <h1 className={styles.listCryptoInfo}>Список криптовалют</h1>
            <div className={styles.cryptoInfo}>
                {cryptoData.map((crypto, index) => (
                    <CryptoListItem crypto={crypto} key={index} />
                ))}
            </div>
            <div className={styles.fetchMoreCrypto}>
                <button
                    className={styles.fetchMoreCryptoButton}
                    onClick={fetchMoreData}
                    disabled={loading}
                >
                    {loading ? "Загрузка" : "Показать больше"}
                </button>
            </div>
        </section>
    );
};

export default CryptoList;
