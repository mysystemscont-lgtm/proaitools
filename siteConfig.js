/**
 * =========================================================================
 * PRO TOOLS AI (proaitools.shop) - CORE SITE CONFIGURATION
 * =========================================================================
 * 
 * Central control file for domain branding, payment endpoints, and links.
 * To activate live WhatsApp order handling, simply add your international phone number
 * (e.g., "1234567890" without + or dashes) to WHATSAPP_NUMBER below.
 */

const SITE_CONFIG = {
  // Brand Identity
  brandName: "PRO TOOLS AI",
  brandShort: "PRO TOOLS",
  brandAccent: "AI",
  domain: "proaitools.shop",
  tagline: "Unlock Premium AI & Creative Tools at Unbeatable Prices",
  subTagline: "Get instant access to authentic software subscriptions, enterprise AI seats, and creative suites at up to 90% off retail prices with our 100% replacement warranty.",
  currencySymbol: "$",

  // =========================================================================
  // STRICT EXCLUSION CONFIG (DO NOT HARDCODE RANDOM NUMBERS OR EXTERNAL LINKS)
  // =========================================================================
  
  /**
   * WHATSAPP_NUMBER:
   * Keep as empty string "" until ready to deploy live WhatsApp checkout.
   * When empty (""), clicking "Order Now" triggers a sleek modern UI modal
   * notifying the user that the checkout channel will be activated shortly.
   * Example when ready: WHATSAPP_NUMBER: "1234567890",
   */
  WHATSAPP_NUMBER: "", 

  /**
   * SOCIAL_LINKS:
   * All social icons remain inactive with href="#" to prevent broken redirects.
   * Paste your active social channel handles here when ready.
   */
  SOCIAL_LINKS: {
    whatsapp: "#",
    telegram: "#",
    discord: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
    facebook: "#"
  },

  // Trust & Live Stats Bar
  stats: [
    { label: "Active Subscriptions", value: "18,400+", icon: "users" },
    { label: "Pro Tools in Catalog", value: "48+", icon: "sparkles" },
    { label: "Instant Activation Rate", value: "99.8%", icon: "zap" },
    { label: "Customer Satisfaction", value: "4.95 / 5", icon: "star" }
  ],

  // Guarantees & Policy
  guarantees: {
    deliveryTime: "Instant (5 - 15 Minutes)",
    warranty: "Full Replacement Guarantee",
    support: "24/7 VIP Live Support",
    accountType: "100% Genuine & Private Access"
  },

  // Contact / Notification Message Template (Used when WhatsApp is activated)
  orderMessageTemplate: (toolTitle, discount, plan) => {
    return encodeURIComponent(
      `Hello PRO TOOLS AI team! 👋\n\nI want to order:\n🛠️ Tool: ${toolTitle}\n🏷️ Offer: 50% TO 90% OFF (Wholesale Rate)\n⏱️ Duration: ${plan}\n\nPlease share the activation and payment instructions. Thank you!`
    );
  }
};

// Export to window for vanilla browser execution
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
