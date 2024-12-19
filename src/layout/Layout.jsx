import styles from "./layout.module.css";
function Layout({ children}) {
    return (
        <>
            <header className={styles.header}>
                <h1>BookApp</h1>
                <p><a href="https://botostart.ir">Botostart</a> | React.js Full Course</p>
            </header>
            {children}
            <footer className={styles.footer}>
                Developed By Maziar With 💜
            </footer>

        </>
    )
}

export default Layout