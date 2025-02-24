import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Frontend Developer with one year of practical experience, crafting
          seamless and engaging web interfaces! Now, I'm looking for a new
          opportunity! Proficient in HTML, CSS, JS, React, and Typescript, I
          bring a hands-on approach to turning design concepts into interactive
          user experiences. Successfully contributed to various projects, honing
          my skills in creating responsive and visually appealing websites.
          Eager to take on new challenges and constantly stay updated with the
          latest industry trends. During my cadence at my previous job, I have
          analyzed and summarized police activities, improving efficiency by 20%
          through strategic work plans, I have also created a database for unit
          performance, enhancing data organization by 30%. Additionally, I
          mentored and supported 4 team members. My analytical mindset, honed in
          law enforcement, brings a strategic approach to problem-solving.
          Excited to bring my passion for frontend development to a dynamic team
          and contribute to the next wave of digital innovation!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
