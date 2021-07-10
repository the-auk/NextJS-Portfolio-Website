import styles from '../styles/Project.module.css'
import Head from 'next/head'

export default function Projects() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.proj}>
        <div className={styles.projright}>
          <img className={styles.mix} src = "MIXIT.png" />
        </div>
            <div className={styles.projleft}>
              <p className={styles.header}> MIXIT</p>
              <p>An Android Application that shows the user, recipes that can be made with the items in the user's kitchen.<br />
                 Java | XML | SQLite | Picasso API | Android Studio
              </p>
        </div>
        </div>
        <div className={styles.proj}>
            <div className={styles.projleft}>
              <p className={styles.header}> Calendar App</p>
              <p>A Desktop Application that acts as a calendar and lets the user schedule events as needed. <br />
                 Swing Library with MVC and Strategy Pattern
              </p>
        </div>
        <div className={styles.projright}>
          <img className={styles.mix} src = "calen2.png" />
          </div>
        </div>
        <div className={styles.proj}>
        <div className={styles.projright}>
          <img className={styles.mix} src = "DOM.PNG" />
        </div>
            <div className={styles.projleft}>
              <p className={styles.header}> PIG Game</p>
              <p>A simple browser game for two players to roll die and get higher score.<br />
                 HTML | CSS | Vanilla JavaScript
              </p>
        </div>
        </div>
        <div className={styles.proj}>
            <div className={styles.projleft}>
              <p className={styles.header}> Monthly Budget App</p>
              <p>A Web Application that lets the user put in expenses and income and gives outputs the budget.<br />
                 HTML CSS Vanilla JavaScript
              </p>
        </div>
        <div className={styles.projright}>
          <img className={styles.mix} src = "JSC.PNG" />
          </div>
        </div>
        <Head>
          <title>Tanmay Ivar Siwach</title>
          <link rel="icon" href="/TA.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
      </div>
    )
  }
  