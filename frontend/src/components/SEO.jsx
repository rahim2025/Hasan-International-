import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Hasan International - Your Trusted Source for Genuine Chemical Solutions Since 1958",
  description = "Hasan International is Bangladesh's most trusted chemical supply and distribution company since 1958. Over 65 years of experience providing authentic, high-grade chemical products for pharmaceuticals, textiles, agriculture, and manufacturing.",
  keywords = "chemical supply bangladesh, chemical distribution, industrial chemicals, laboratory chemicals, textile chemicals, hasan international, bangladesh chemical company, chemical products, pharmaceutical chemicals",  image = "https://www.hasanchemicalbd.com/logo-og.jpg",
  url = "https://www.hasanchemicalbd.com/",
  type = "website",
  schemaData = null
}) => {
  const fullTitle = title.includes('Hasan International') ? title : `${title} | Hasan International`;
  
  return (
    <Helmet>      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Hasan International" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="BD-13" />
      <meta name="geo.placename" content="Dhaka, Bangladesh" />
      <meta name="geo.position" content="23.8103;90.4125" />
      <meta name="ICBM" content="23.8103, 90.4125" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />
      <meta name="theme-color" content="#0d47a1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />      <meta property="og:image:alt" content="Hasan International Logo" />
      <meta property="og:site_name" content="Hasan International" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="Hasan International Logo" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional Schema Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
