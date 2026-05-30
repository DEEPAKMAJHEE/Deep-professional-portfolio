import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import SecurityIcon from '@mui/icons-material/Security';
import ArticleIcon from '@mui/icons-material/Article';
import StorageIcon from '@mui/icons-material/Storage';
import GroupIcon from '@mui/icons-material/Group';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{color:'rgb(227, 255, 66)'}} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    {
      title: "Native place",
      description: "A personal portfolio website designed to showcase my background, technical skills, projects, and journey as an aspiring software developer in a clean and modern way.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: "https://deepakmajhee.github.io/Native-Place-JAJPUR/index.html",
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.orange
    }
  ];

  // Create meta description from projects
  const metaDescription = `Professional projects by Deepak Majhee including ${projects.slice(0, 3).map(p => p.title).join(', ')} and more. Explore enterprise solutions, AI systems, and research publications.`;

  return (
    <>
      <Helmet>
        <title>Projects by Deepak Majhee | Web Development</title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content="Deepak Majhee projects, web development projects"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deepakmajhee.com/projects" />
        <meta property="og:title" content="Projects by Deepak Majhee | Web Development" />
        <meta 
          property="og:description" 
          content="Explore professional projects including enterprise platforms, corporate solutions built with modern technologies."
        />
        <meta property="og:image" content="https://deepakmajhee.com/images/projects-og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://deepakmajhee.com/projects" />
        <meta property="twitter:title" content="Projects by Deepak Majhee | Web Development " />
        <meta 
          property="twitter:description" 
          content="Check out my portfolio of enterprise solutions and corporate projects in web development."
        />
        <meta property="twitter:image" content="https://deepakmajhee.com/images/projects-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://deepakmajhee.com/projects" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Deepak Majhee" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Structured Data for Projects/Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Deepak Majhee",
            "description": "Collection of professional projects and contributions by Deepak Majhee",
            "url": "https://deepakmajhee.com/projects",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.link || "https://deepakmajhee.com/projects",
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Deepak Majhee"
                }
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
                "name": "Projects",
                "item": "https://deepakmajhee.com/projects"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Work & Contributions
        </Typography>

        <Typography className={styles.subtitle}>
          Professional systems, enterprise platforms, and research work
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${project.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <CardContent>
                {project.icon}
                <Typography 
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {project.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {project.description}
                </Typography>
                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {project.tech.join(', ')}
                </Box>
                <TechStack tech={project.tech} />
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.title.includes('Library') ? 'Visit Platform' : 
                     project.title.includes('NAMAMI') ? 'Company Website' :
                     project.title.includes('FLAVR') ? 'Explore Platform' :
                     project.title.includes('Pragati') ? 'Visit Website' :
                     project.title.includes('Research') ? 'View Publication' :
                     'View Project'}
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;