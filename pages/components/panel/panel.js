import styles from './panel.module.scss'
import Navigation from '../navigation/navigation'

import Image from 'next/image'

export default function Panel(props) {
    return (
        <div className={styles.panelContainer}>
            <Image src="/app_logo.svg" alt="PointApp Logo" width={35.74} height={32.08} />
            <Navigation />
            <p>salimos a...</p>
            <div>
                <button>button 1</button>
                <button>button 2</button>
                <button>button 3</button>
            </div>
        </div>
    )
}