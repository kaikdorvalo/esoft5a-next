import React from "react";
import styles from "./CardSection.module.css";

interface props {
    title: string;
    children: React.ReactNode
}

export function CardSection({ title, children }: props) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}