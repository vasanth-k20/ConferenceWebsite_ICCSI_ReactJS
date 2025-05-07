import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();
  const baseUrl = "https://ic-csi.com/";

  const metaInfo = {
    "/": {
      title: "ICCSI | Home",
      description:
        "Welcome to ICCSI – International Conference on Computer Science Innovations. A global platform for researchers, academicians, and industry professionals.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/about": {
      title: "ICCSI | About the Conference",
      description:
        "Learn about ICCSI – its mission, vision, and contributions to the field of Computer Science Innovations.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/scope": {
      title: "ICCSI | Scope of Conference",
      description:
        "Explore the wide range of topics covered under ICCSI – International Conference on Computer Science Innovations.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/organize": {
      title: "ICCSI | Organizing Committee",
      description:
        "Meet the dedicated team organizing the ICCSI – International Conference on Computer Science Innovations.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/editorial": {
      title: "ICCSI | Editorial Board",
      description:
        "View the esteemed editorial board behind ICCSI – curating high-quality academic content.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/keydates": {
      title: "ICCSI | Important Dates",
      description:
        "Stay informed on submission deadlines, notification dates, and event schedules for ICCSI.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/registration": {
      title: "ICCSI | Registration Details",
      description:
        "Get information on registration fees, categories, and process for attending ICCSI.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/papersub": {
      title: "ICCSI | Paper Submission",
      description:
        "Submit your research paper to ICCSI – a platform for innovative work in Computer Science.",
      image: `${baseUrl}/img/Logoo.png`,
    },
    "/contact": {
      title: "ICCSI | Contact Us",
      description:
        "Have questions? Reach out to the ICCSI organizing committee for support and queries.",
      image: `${baseUrl}/img/Logoo.png`,
    },
  };

  const currentPath = Object.keys(metaInfo).includes(location.pathname)
    ? location.pathname
    : "/";

  const { title, description, image } = metaInfo[currentPath];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${baseUrl}${location.pathname}`} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
    </Helmet>
  );
};

export default MetaTags;