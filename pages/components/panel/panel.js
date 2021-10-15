import styles from './panel.module.scss'

import Image from 'next/image'

export default function Panel(props) {
    return (
        <div className={styles.panelContainer}>
            <div>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </div>
            <div>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <input type="search"></input>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </div>
            <div>
                <p>salimos a...</p>
                <div>
                    <button>button 1</button>
                    <button>button 2</button>
                    <button>button 3</button>
                </div>
            </div>
        </div>
    )
}