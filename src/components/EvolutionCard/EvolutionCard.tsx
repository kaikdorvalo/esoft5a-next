import styles from './EvolutionCard.module.css'

interface props {
    img: string
    onclick: () => void;
}

export function EvolutionCard({ img, onclick }: props) {
    return (
        <div className={styles.card}>
            <div className={styles.imgBox} onClick={onclick}>
                <img src={img} alt='pokemon' className={styles.img}></img>
            </div>
        </div>
    )
}