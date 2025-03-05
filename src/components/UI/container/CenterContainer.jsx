import styles from "./CenterContainer.module.css"

export const CenterContainer = ({ children }) => {
    return <div className={styles.container}>
        {children}
    </div>
}