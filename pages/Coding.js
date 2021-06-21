import styles from '../styles/Coding.module.css'
import Head from 'next/head'

export default function Coding() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapcolumn}>
            <div className={styles.wraprow}>
            <img alt="NodeJs" title="NodeJS" className={styles.image} src="/node.png" />
            <img alt="ReactJs" title="ReactJS" className={styles.image} src="/react.png" />
            <img alt="JavaScript" title="JavaScript" className={styles.image} src="/js.png" />
            <img alt="NextJs" title="NextJS" className={styles.image} src="/next.png" />
            </div>
            <div className={styles.wraprow}>
            <img alt="Java" title="Java" className={styles.image} src="/java.png" />
            <img alt="Python" title="Python" className={styles.image} src="/python.png" />
            <img alt="Unity" title="Unity" className={styles.image} src="/unity.png" />
            <img alt="Selenium" title="Selenium" className={styles.image} src="/selenium.png" />
            </div>
            <div className={styles.wraprow}>
            <img alt="MySQL" title="MySQL" className={styles.image} src="/mysql.png" />
            <img alt="Google FireBase" title="Google FireBase" className={styles.image} src="/firebase.png" />
            <img alt="MongoDB" title="MongoDB" className={styles.image} src="/mongo.svg" />
            <img alt="Adobe Illustrator" title="Adobe Illustrator" className={styles.image} src="/ai.png" />
            <img alt="Adobe XD" title="Adobe XD" className={styles.image} src="/xd.png" />
            </div>
        </div>
        <Head>
          <title>Tanmay Siwach</title>
          <link rel="icon" href="/TA.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
      </div>
    )
  }
  