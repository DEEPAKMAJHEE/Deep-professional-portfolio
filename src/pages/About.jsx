import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Deepak Majhee </title>

        <meta
          name="description"
          content="Learn about Deepak Majhee, A student of information science and telecommunications. A passionate Indian full-stack software developer."
        />

        <meta
          name="keywords"
          content="Deepak Majhee, I am a passionate web developer who enjoys creating responsive and user-friendly websites.
          I love learning new technologies, improving my coding skills, and building projects that help me grow as a developer."
        />

        <meta name="author" content="AediaX Tech Private Limited" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Deepak Majhee" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="AediaX Tech Private Limited" />
        <meta property="og:url" content="https://aediax.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deepak Majhee" />
        <meta
          name="twitter:description"
          content="Indian full-stack developer and entrepreneur leading AediaX Tech Private Limited."
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Deepak Majhee
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        Fresher Full-Stack Software Developer | B.Sc. Information Science & Telecommunication Student at GMU, Sambalpur
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Deepak majhee (born 5 February 2006) is an Indian full-stack software developer,
        He is a fresher software developer from Jajpur, Odisha, India, with a strong passion for technology and continuous learning.
        He is focused on improving his technical skills, building real-world projects, and growing as a developer through dedication and hard work.
        With an interest in teamwork, communication, and leadership, he aims to become a successful software developer and inspire others through his journey and achievements in the tech industry.
      </Typography>


      <Typography id={styles.bioPara3} className={styles.bio}>
        He is currently pursuing a B.Sc. in Information Science and Telecommunication (2023–2027) at GMU, Sambalpur.
        Alongside his academic studies, he has developed a strong interest in software development, web technologies,
        and analytical problem-solving. His passion for learning modern technologies and improving technical skills influences his approach to building efficient,
        user-friendly, and practical software solutions. He continuously works on enhancing his knowledge in front-end and back-end development while exploring new tools and technologies in the field of software engineering.
      </Typography>

      {/* Cards */}
      <Box id={styles.cardsWrapper} className={styles.cardContainer}>

        {/* Professional Role */}
        <Card id={styles.professionalRoleCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.professionalRoleTitle} variant="h6" className={styles.cardTitle}>
              Professional Role
            </Typography>

            <Typography id={styles.professionalRoleText} className={styles.cardText}>
             Deepak is currently a second-year B.Sc. Information Science and Telecommunication student at GMU, Sambalpur.
             He is passionate about learning new technologies, programming languages, and continuously improving his technical skills.
             He is a hardworking and dedicated learner who enjoys teamwork, communication, and solving problems through technology.
             With a strong interest in software development, he is focused on becoming a skilled developer and building a successful career in the tech industry.
            </Typography>


          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card id={styles.academicCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
              Academic Background
            </Typography>

            <Typography id={styles.academicText} className={styles.cardText}>
              Deepak is a B.Sc. Information Science and Telecommunication student (2023–2027) 
              who is passionate about technology, creativity, and continuous learning.
              He enjoys exploring modern software tools, solving problems through coding,
              and building projects that improve his practical skills.
            </Typography>
          </CardContent>
        </Card>

        {/* Family & Values */}
        <Card id={styles.familyCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.familyTitle} variant="h6" className={styles.cardTitle}>
              Family & Values
            </Typography>

            <Typography id={styles.familyText1} className={styles.cardText}>
              Deepak comes from a middle-class family where educational opportunities were limited.
              Despite facing challenges, he has continued to work hard and stay focused on his goals.
              His strong passion for software development motivates him to learn new technologies, improve his skills,
              and build a better future. He believes that dedication, consistency,
              and hard work can help him achieve his dream of becoming a successful software developer and improving his family’s background and lifestyle.
            </Typography>

          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
