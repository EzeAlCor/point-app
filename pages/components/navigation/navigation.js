import Image from "next/dist/client/image"
import styles from "./navigation.module.scss"
export default function Navigation(props){
    return (
        <div className={styles.navigationContainer}>
            <button className={styles.hamburger}></button>
            <input className={styles.searchInput} type="search"></input>
            <button className={styles.searchIcon}></button>
        </div>
    )
}