// Google Analytics and SEO tracking utilities
class SEOTracker {
  // Initialize Google Analytics
  static initGoogleAnalytics(measurementId) {
    if (typeof window !== 'undefined' && measurementId) {
      // Load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }

  // Track page views
  static trackPageView(path, title) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: path,
        page_title: title
      });
    }
  }

  // Track events
  static trackEvent(action, category, label, value) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  // Track business conversions
  static trackBusinessEvent(eventType, productName, value) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventType, {
        event_category: 'business',
        event_label: productName,
        value: value,
        currency: 'BDT'
      });
    }
  }
}

export default SEOTracker;
