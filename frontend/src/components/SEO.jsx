import { useEffect } from 'react';

const SEO = ({ 
  title = "Hasan International - Your Trusted Source for Genuine Chemical Solutions Since 1958",
  description = "Hasan International is Bangladesh's most trusted chemical supply and distribution company since 1958. Over 65 years of experience providing authentic, high-grade chemical products for pharmaceuticals, textiles, agriculture, and manufacturing.",
  keywords = "chemical supply bangladesh, chemical distribution, industrial chemicals, laboratory chemicals, textile chemicals, hasan international, bangladesh chemical company, chemical products, pharmaceutical chemicals",  
  image = "https://www.hasanchemicalbd.com/logo-og.jpg",
  url = "https://www.hasanchemicalbd.com/",
  type = "website",
  schemaData = null
}) => {
  const fullTitle = title.includes('Hasan International') ? title : `${title} | Hasan International`;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Function to update or create meta tag
    const updateMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Hasan International');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('language', 'en');
    updateMetaTag('geo.region', 'BD-13');
    updateMetaTag('geo.placename', 'Dhaka, Bangladesh');
    updateMetaTag('geo.position', '23.8103;90.4125');
    updateMetaTag('ICBM', '23.8103, 90.4125');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('revisit-after', '3 days');
    updateMetaTag('theme-color', '#0d47a1');
    
    // Update Open Graph meta tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:secure_url', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'Hasan International Logo', true);
    updateMetaTag('og:site_name', 'Hasan International', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Update Twitter meta tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', fullTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:image:alt', 'Hasan International Logo', true);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Add schema data if provided
    if (schemaData) {
      let schemaScript = document.querySelector('script[type="application/ld+json"][data-react-seo]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('data-react-seo', 'true');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    }
  }, [fullTitle, description, keywords, image, url, type, schemaData]);
  
  return null; // This component doesn't render anything
};

export default SEO;
