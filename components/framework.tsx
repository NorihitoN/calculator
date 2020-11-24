import styles from './framework.module.css'

export default function Framework({ children }) {
  return <div className={styles.container}>{children}</div>

}