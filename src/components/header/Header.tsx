import styles from './Header.module.css'

interface props {
    title: string
}

export function Header({ title }: props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.pageh1}>{title}</h1>
        </header>
    )
} 