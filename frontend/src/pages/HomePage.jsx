import ProductCarousel from '../components/ProductCarousel';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hasan International",
    "alternateName": "Hasan International Chemical Supply",
    "url": "https://www.hasanchemicalbd.com",
    "logo": "https://www.hasanchemicalbd.com/logo.jpg",
    "description": "Your Trusted Source for Genuine Chemical Solutions Since 1958. Leading chemical supply and distribution company in Bangladesh specializing in industrial chemicals, laboratory chemicals, and specialty chemical products.",
    "foundingDate": "1958",
    "industry": "Chemical Supply and Distribution",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 04, 18/A, Razib Chemicals Market(Opposite of the Girza), Armanian Street",
        "addressLocality": "Armanitola",
        "addressRegion": "Dhaka-1100",
        "addressCountry": "Bangladesh"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+880 1819017294",
        "contactType": "Customer Service",
        "areaServed": "BD"
      }
    ],
    "email": "hasanin1950@gmail.com",
    "sameAs": [
      "https://www.hasanchemicalbd.com"
    ]
  };

  return (
    <>
      <SEO 
        title="Hasan International - Your Trusted Source for Genuine Chemical Solutions Since 1958"
        description="Leading chemical supply and distribution company in Bangladesh. Over 65 years of experience providing authentic, high-grade chemical products for pharmaceuticals, textiles, agriculture, and manufacturing."
        url="https://www.hasanchemicalbd.com/"
        schemaData={homeSchemaData}
      />
      <div className="min-h-screen bg-base-200 pt-20">
      {/* Featured Products - Moved to top, right below navbar */}
      <section className="py-4 bg-gradient-to-r from-base-100 via-base-200 to-base-100 border-b border-base-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-base-content flex items-center gap-2">
              <div className="size-6 rounded-lg bg-white border border-primary/30 flex items-center justify-center p-0.5">
                <img 
                  src="/logo.jpg" 
                  alt="Hasan International Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              Featured Products
            </h2>
            <Link to="/" className="text-xs text-primary hover:underline font-medium flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="max-w-full mx-auto">
            <ProductCarousel />
          </div>
        </div>
      </section>
      
      {/* Header section with logo */}
      <section className="py-12 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-12 gap-4 md:gap-8">
            <div className="flex flex-col xs:flex-row items-center gap-4 mb-6 md:mb-0">
              <div className="w-16 h-16 xs:w-12 xs:h-12 md:w-16 md:h-16 rounded-xl bg-white border-2 border-primary/30 shadow-lg flex items-center justify-center p-2">
                <img 
                  src="/logo.jpg" 
                  alt="Hasan International Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden xs:block h-8 md:h-12 border-l-2 border-primary/30"></div>
              <div className="space-y-1 text-center xs:text-left">
                <div className="text-xs xs:text-sm font-medium text-primary">Hasan International</div>
                <div className="text-xs text-base-content/60">Since 1958</div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-base-content leading-tight">
                Hasan International
                <span className="text-primary block">Chemical Supply & Distribution</span>
              </h1>
              <p className="text-base xs:text-lg text-base-content/70 max-w-2xl mx-auto md:mx-0 mt-4 mb-8">
                Your Trusted Source for Genuine Chemical Solutions Since 1958. 
                Over 65 years of expertise in providing authentic, high-grade chemical products.
              </p>
              <Link to="/" className="btn btn-primary btn-md xs:btn-lg gap-2 w-full xs:w-auto">
                Explore Our Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default HomePage;