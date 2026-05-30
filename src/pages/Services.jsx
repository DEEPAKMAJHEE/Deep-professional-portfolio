import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import MobileIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Services.module.css';

const Tech = ({ items }) => (
  <Box className={styles.tech}>
    {items.map((item, i) => (
      <Chip 
        key={i} 
        label={item} 
        size="small" 
        style={{color:'rgb(227, 255, 66)'}} 
        aria-label={`Technology: ${item}`}
      />
    ))}
  </Box>
);

function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Building fast, responsive, and visually appealing web applications that provide smooth user experiences and practical digital solutions.",
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sitemap'],
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue,
      category: "Web Development"
    },

  ];

  // Create meta description from services
  const metaDescription = `Professional services by Deepak Majhee including ${services.map(s => s.category).join(', ')}. Offering enterprise-grade solutions in web`;

  // Create keywords from all tech stacks
  const allKeywords = Array.from(new Set(services.flatMap(s => s.tech))).join(', ');

  return (
    <>
      <Helmet>
        <title>Services </title>
        <meta 
          name="description" 
          content={metaDescription}
        />
        <meta 
          name="keywords" 
          content={`Deepak Majhee services, ${allKeywords}, web development`}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deepakmajhee.com/services" />
        <meta property="og:title" content="Professional Services | Deepak Majhee" />
        <meta 
          property="og:description" 
          content="Enterprise-grade development services: Web applications, mobile apps, AI systems, security solutions, and professional training."
        />
        <meta property="og:image" content="https://deepakmajhee.com/images/services-og-image.jpg" />
        <meta property="og:image:alt" content="Deepak Majhee Services Overview" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://deepakmajhee.com/services" />
        <meta property="twitter:title" content="Services | Deepak Majhee - Development & AI Solutions" />
        <meta 
          property="twitter:description" 
          content="Expert services in web development, mobile apps, AI systems, security solutions, and professional training."
        />
        <meta property="twitter:image" content="https://deepakmajhee.com/images/services-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://deepakmajhee.com/services" />
        
        {/* Additional meta tags */}
        <meta name="author" content="Deepak Majhee" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="subject" content="Web Development, Mobile Development, AI Solutions" />
        <meta name="classification" content="Technology Services" />
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Deepak Majhee Development Services",
            "description": "Professional web, mobile, AI, and security development services",
            "url": "https://deepakmajhee.com/services",
            "provider": {
              "@type": "Person",
              "name": "Deepak Majhee",
              "jobTitle": "Web Developer & AI Engineer",
              "email": "deepakmajhee36@gmail.com",
              "url": "https://deepakmajhee.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Development Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "category": service.category,
                  "serviceType": service.tech.join(", "),
                  "provider": {
                    "@type": "Person",
                    "name": "Deepak Majhee"
                  }
                },
                "position": index + 1
              }))
            }
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
                "name": "Services",
                "item": "https://deepakmajhee.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Services
        </Typography>

        <Typography className={styles.subtitle}>
          Building scalable, secure, and intelligent digital solutions
        </Typography>

        <Box className={styles.cards}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${styles.card} ${service.color}`}
              itemScope
              itemType="https://schema.org/Service"
              aria-labelledby={`service-title-${index}`}
            >
              <CardContent>
                <div aria-hidden="true">
                  {service.icon}
                </div>
                <Typography 
                  id={`service-title-${index}`}
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {service.title}
                </Typography>
                <Typography 
                  className={styles.text}
                  itemProp="description"
                >
                  {service.description}
                </Typography>
                <Box 
                  itemProp="serviceType" 
                  style={{ display: 'none' }}
                >
                  {service.tech.join(', ')}
                </Box>
                <Box 
                  itemProp="category" 
                  style={{ display: 'none' }}
                >
                  {service.category}
                </Box>
                <Tech items={service.tech} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;