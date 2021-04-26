import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GitHub } from '../components/github'
import { Email } from '../components/email'
import { LinkedIn } from '../components/linkedin'
import data from './resume.json'
import { Projects } from '../components/projects'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>aaronjenkins.me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Projects projects={data.projects}/>
                </div>

                {/* <div className={styles.grid}>
                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div> */}
            </main>
            <footer className={styles.footer}>
                <GitHub url={data.basics.github} />
                <LinkedIn url={data.basics.linkedIn} />
                <Email email={data.basics.email} />
            </footer>{' '}
        </div>
    )
}
