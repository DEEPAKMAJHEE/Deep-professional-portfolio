import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, LinearProgress, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildIcon from '@mui/icons-material/Build';

import styles from '../styles/Skills.module.css';

const technicalSkills = [
  { name: 'HTML', level: 95, icon: <CodeIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'CSS', level: 90, icon: <CodeIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'JavaScript', level: 88, icon: <CodeIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'React', level: 85, icon: <WebIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'Node.js', level: 80, icon: <CodeIcon className={styles.skillIcon} />, category: 'Backend' },
  { name: 'Express.js', level: 82, icon: <CodeIcon className={styles.skillIcon} />, category: 'Backend' },
  { name: 'MySQL', level: 70, icon: <StorageIcon className={styles.skillIcon} />, category: 'Database' },
  { name: 'Firebase', level: 80, icon: <WebIcon className={styles.skillIcon} />, category: 'Backend' },
  { name: 'Git/GitHub', level: 90, icon: <CodeIcon className={styles.skillIcon} />, category: 'Tools' },
];

const professionalSkills = [
  { name: 'Creativity', level: 90, icon: <EmojiObjectsIcon className={styles.skillIcon} /> },
  { name: 'Problem Solving', level: 85, icon: <CodeIcon className={styles.skillIcon} /> },
  { name: 'Teamwork', level: 88, icon: <BuildIcon className={styles.skillIcon} /> },
  { name: 'Communication', level: 80, icon: <EmojiObjectsIcon className={styles.skillIcon} /> },
  { name: 'Time Management', level: 85, icon: <BuildIcon className={styles.skillIcon} /> },
  { name: 'Leadership', level: 80, icon: <BuildIcon className={styles.skillIcon} /> },
  { name: 'Adaptability', level: 90, icon: <EmojiObjectsIcon className={styles.skillIcon} /> },
];

const toolsAndPlatforms = [
  { name: 'VS Code', icon: <CodeIcon className={styles.toolIcon} /> },
  { name: 'Git', icon: <CodeIcon className={styles.toolIcon} /> },
];

function Skills() {
  // Calculate average technical skill level
  const avgTechnicalLevel = Math.round(
    technicalSkills.reduce((sum, skill) => sum + skill.level, 0) / technicalSkills.length
  );

  // Create meta description
  const metaDescription = `Deepak Majhee's technical skills include ${technicalSkills.slice(0, 5).map(s => s.name).join(', ')} and more. Professional skills: ${professionalSkills.slice(0, 3).map(s => s.name).join(', ')}.`;

  // Create skills list for structured data
  const allSkills = [...technicalSkills, ...professionalSkills];

  return (
    <>
      <Helmet>
        <title>Skills | Deepak Majhee - Technical & Professional Expertise</title>
        <meta 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content={`Deepak Majhee skills, ${technicalSkills.map(s => s.name).join(', ')}, web development skills, programming skills, technical expertise, professional skills`}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:profile:username" content="deepakmajhee" />
        <meta property="og:url" content="https://deepakmajhee.com/skills" />
        <meta property="og:title" content="Skills & Expertise | Deepak Majhee" />
        <meta 
          property="og:description" 
          content="Explore technical and professional skills including web development, mobile development, AI, and soft skills with proficiency levels."
        />
        <meta property="og:image" content="https://deepakmajhee.com/images/skills-og-image.jpg" />
        <meta property="og:image:alt" content="Deepak Majhee Skills Overview" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://deepakmajhee.com/skills" />
        <meta property="twitter:title" content="Skills | Deepak Majhee - Development Expertise" />
        <meta 
          property="twitter:description" 
          content="Technical skills in React, Node.js, Python, and professional abilities. View detailed proficiency levels."
        />
        <meta property="twitter:image" content="https://deepakmajhee.com/images/skills-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://deepakmajhee.com/skills" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Deepak Majhee" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        
        {/* Structured Data for Skills */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Deepak Majhee",
            "url": "https://deepakmajhee.com",
            "description": "Web Developer & AI Engineer",
            "knowsAbout": technicalSkills.map(skill => skill.name),
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Web Developer & AI Engineer",
              "skills": allSkills.map(skill => ({
                "@type": "DefinedTerm",
                "name": skill.name,
                "description": `${skill.name} skill with ${skill.level}% proficiency`,
                "inDefinedTermSet": skill.category || "Professional Skill"
              }))
            },
            "knowsLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "proficiencyLevel": "Professional working proficiency"
              },
              {
                "@type": "Language",
                "name": "Hindi",
                "proficiencyLevel": "Native or bilingual proficiency"
              },
              {
                "@type": "Language",
                "name": "Odia",
                "proficiencyLevel": "Native or bilingual proficiency"
              }
            ]
          })}
        </script>
        
        {/* Additional Skill Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Technical Skills Proficiency",
            "description": "Detailed technical skills with proficiency levels",
            "numberOfItems": technicalSkills.length,
            "itemListElement": technicalSkills.map((skill, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Skill",
                "name": skill.name,
                "level": `${skill.level}%`,
                "category": skill.category,
                "proficiencyLevel": skill.level >= 85 ? "Expert" : 
                                  skill.level >= 70 ? "Advanced" : 
                                  skill.level >= 50 ? "Intermediate" : "Beginner"
              }
            }))
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://deepakmajhee.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Skills",
                "item": "https://deepakmajhee.com/skills"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h2" className={styles.title}>
          My Skills
        </Typography>
        <Typography className={styles.subtitle}>
          Technical expertise, professional abilities, and tools proficiency
        </Typography>

        {/* Technical Skills */}
        <Box className={styles.section} itemScope itemType="https://schema.org/ItemList">
          <Typography variant="h4" className={styles.sectionTitle}>
            <CodeIcon aria-hidden="true" /> Technical Skills
          </Typography>
          <Typography variant="body2" className={styles.avgSkill} style={{ display: 'none' }} itemProp="description">
            Average proficiency: {avgTechnicalLevel}%
          </Typography>
          <Box className={styles.skillsList}>
            {technicalSkills.map((skill, i) => (
              <Box 
                key={i} 
                className={styles.skillItem}
                itemScope
                itemType="https://schema.org/Skill"
                itemProp="itemListElement"
              >
                <Box className={styles.skillNameIcon}>
                  <span aria-hidden="true">{skill.icon}</span>
                  <Typography 
                    className={styles.skillName}
                    itemProp="name"
                  >
                    {skill.name}
                  </Typography>
                  <meta itemProp="category" content={skill.category} />
                  <meta itemProp="proficiencyLevel" content={`${skill.level}%`} />
                </Box>
                <Box className={styles.progressContainer}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    className={styles.progressBar}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                  <Typography 
                    className={styles.skillLevel}
                    itemProp="level"
                    style={{ display: 'none' }}
                  >
                    {skill.level}%
                  </Typography>
                  <Typography className={styles.skillLevel} aria-hidden="true">
                    {skill.level}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Professional Skills */}
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.sectionTitle}>
            <EmojiObjectsIcon aria-hidden="true" /> Professional Skills
          </Typography>
          <Box className={styles.skillsList}>
            {professionalSkills.map((skill, i) => (
              <Box key={i} className={styles.skillItem}>
                <Box className={styles.skillNameIcon}>
                  <span aria-hidden="true">{skill.icon}</span>
                  <Typography className={styles.skillName}>
                    {skill.name}
                  </Typography>
                </Box>
                <Box className={styles.progressContainer}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    className={styles.progressBar}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                  <Typography className={styles.skillLevel} aria-hidden="true">
                    {skill.level}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Tools & Platforms */}
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.sectionTitle}>
            <BuildIcon aria-hidden="true" /> Tools & Platforms
          </Typography>
          <Box className={styles.tools}>
            {toolsAndPlatforms.map((tool, i) => (
              <Chip
                key={i}
                label={tool.name}
                icon={<span aria-hidden="true">{tool.icon}</span>}
                color="primary"
                className={styles.toolChip}
                aria-label={`Tool: ${tool.name}`}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Skills;