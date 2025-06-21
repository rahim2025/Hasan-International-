import { MapPin, Phone, Mail, Globe, Building, Users, Target } from "lucide-react";
import SEO from "../components/SEO";

const AboutUsPage = () => {
  return (
    <>
      <SEO 
        title="About Us - Hasan International - Your Trusted Chemical Partner Since 1958"
        description="Learn about Hasan International - Bangladesh's most trusted chemical supply and distribution company since 1958. Over 65 years of experience serving pharmaceuticals, textiles, agriculture, and manufacturing industries."
        keywords="about hasan international, chemical supply bangladesh, chemical distribution company, bangladesh chemicals, chemical industry experience, since 1958"
        url="https://www.hasanchemicalbd.com/about"
      />
      <div className="container mx-auto px-4 pt-20 pb-10">
      <div className="max-w-5xl mx-auto">
        {/* Header with logo and company name */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="size-28 rounded-2xl bg-white border-4 border-primary/20 shadow-lg mb-4 flex items-center justify-center p-4">
            <img
              src="/logo.jpg"
              alt="Hasan International Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">
            HASAN INTERNATIONAL
          </h1>
          <p className="text-lg md:text-xl italic text-base-content/70 text-center mt-2">
            Your Trusted Source for Genuine Chemical Solutions Since 1958
          </p>
        </div>

        {/* Company description */}
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-8">
          <div className="card-body">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Users className="text-primary" />
              About Our Company
            </h2>
            <p className="text-base-content/80 mb-4">
              With a proud heritage dating back to 1958, Hasan International has been a cornerstone 
              in Bangladesh's chemical supply industry for over six decades. Built on a foundation 
              of integrity, quality, and service, we have earned our reputation as the most trusted 
              local source for genuine, high-grade chemical products.
            </p>
            <p className="text-base-content/80 mb-4">
              Our deep industry expertise and unwavering commitment to quality have positioned us 
              as a preferred partner for a wide range of sectors — including pharmaceuticals, 
              textiles, agriculture, food processing, and manufacturing.
            </p>
            <p className="text-base-content/80">
              We provide only 100% genuine and certified chemical products, sourced from reputable 
              manufacturers worldwide, ensuring authenticity and quality in every delivery.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-8">
          <div className="card-body">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Target className="text-primary" />
              Our Vision, Mission & Values
            </h2>
            <div className="text-base-content/80">
              <div className="mb-4">
                <p className="mb-2">
                  <strong className="text-primary">Vision:</strong> To be Bangladesh's most reliable and innovative chemical distribution company — providing unmatched value through quality, service, and trust.
                </p>
              </div>
              <div className="mb-4">
                <p className="mb-2">
                  <strong className="text-primary">Mission:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deliver genuine chemical products with precision and responsibility</li>
                  <li>Build enduring partnerships through customer-focused service</li>
                  <li>Promote safe and sustainable chemical use across industries</li>
                </ul>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-primary">Why Choose Hasan International:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Authenticity Guaranteed:</strong> 100% genuine and certified chemical products</li>
                  <li><strong>Decades of Experience:</strong> Over 65 years of industry leadership and customer trust</li>
                  <li><strong>Tailored Solutions:</strong> Customized chemical supply solutions for all business sizes</li>
                  <li><strong>Customer-Centric Approach:</strong> Long-term relationships with consistent quality</li>
                  <li><strong>Sustainability & Safety:</strong> All products comply with international standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Products & Services */}
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-8">
          <div className="card-body">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Target className="text-primary" />
              Our Products & Services
            </h2>
            <p className="text-base-content/80 mb-4">
              We offer a comprehensive range of industrial and specialty chemicals, including but not limited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-5 space-y-2 text-base-content/80">
                <li>Laboratory & Analytical Chemicals</li>
                <li>Industrial Solvents</li>
                <li>Cleaning Agents & Disinfectants</li>
                <li>Textile Processing Chemicals</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2 text-base-content/80">
                <li>Water Treatment Solutions</li>
                <li>Food-Grade Additives</li>
                <li>Agricultural Chemicals</li>
                <li>Custom Chemical Sourcing</li>
              </ul>
            </div>
            <p className="text-base-content/80 mt-4">
              <em>If you're looking for a specific product, our experienced team is ready to source it for you.</em>
            </p>
          </div>
        </div>

        {/* Office Location */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Bangladesh Office */}
          <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden h-full">
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <Building className="text-primary" />
                Head Office - Bangladesh
              </h2>
              <div className="flex items-start gap-3 mt-4">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-base-content/80 font-medium">Hasan International</p>
                  <p className="text-base-content/80">Shop No. 04, 18/A, Razib Chemicals Market</p>
                  <p className="text-base-content/80">(Opposite of the Girza), Armanian Street</p>
                  <p className="text-base-content/80">Armanitola, Dhaka-1100, Bangladesh</p>
                  <p className="text-sm text-base-content/60 mt-2">
                    <strong>Established:</strong> 1958 | <strong>Experience:</strong> 65+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>        
    

        {/* Contact Information */}
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden mb-8">
          <div className="card-body">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Phone className="text-primary" />
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-base-content/60">Phone</p>
                    <p className="font-medium">+880 1819017294, +8801842151098</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-base-content/60">Address</p>
                    <p className="font-medium">Shop No. 04, 18/A, Razib Chemicals Market(Opposite of the Girza), Armanian Street, Armanitola, Dhaka-1100, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" />
                  <a href="mailto:hasanin1950@gmail.com" className="hover:text-primary">
                    hasanin1950@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="text-primary shrink-0" />
                  <a href="https://www.hasanchemicalbd.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    www.hasanchemicalbd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="card bg-primary text-primary-content shadow-lg rounded-xl overflow-hidden">
          <div className="card-body text-center">
            <h2 className="card-title justify-center mb-2">Get in Touch With Us</h2>
            <p className="mb-4">Interested in our products? Have questions? We'd love to hear from you!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;