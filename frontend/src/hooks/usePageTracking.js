import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOTracker from '../lib/seoTracker';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics on app load
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
      SEOTracker.initGoogleAnalytics(measurementId);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const path = location.pathname + location.search;
    const title = document.title;
    
    // Track page view
    SEOTracker.trackPageView(path, title);
    
    // Track specific business events based on page
    if (path.includes('/products')) {
      SEOTracker.trackBusinessEvent('page_view', 'products_page', 1);
    } else if (path.includes('/contact')) {
      SEOTracker.trackBusinessEvent('page_view', 'contact_page', 1);
    } else if (path.includes('/about')) {
      SEOTracker.trackBusinessEvent('page_view', 'about_page', 1);
    }
  }, [location]);
};

export default usePageTracking;
