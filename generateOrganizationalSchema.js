// Replace the placeholders with your company's information
var companyName = "ACME Corporation";
var companyUrl = "https://www.acme.com";
var companyLogo = "https://www.acme.com/logo.png";
var companyContactPoint = {
  "@type": "ContactPoint",
  "telephone": "+1-123-456-7890",
  "contactType": "customer service"
};
var companyAddress = {
  "@type": "PostalAddress",
  "streetAddress": "123 Main St.",
  "addressLocality": "New York",
  "addressRegion": "NY",
  "postalCode": "10001",
  "addressCountry": "US"
};

// Generate the organizational schema code
var schemaCode = '<script type="application/ld+json">{\n' +
  '  "@context": "http://schema.org",\n' +
  '  "@type": "Organization",\n' +
  '  "name": "' + companyName + '",\n' +
  '  "url": "' + companyUrl + '",\n' +
  '  "logo": "' + companyLogo + '",\n' +
  '  "contactPoint": ' + JSON.stringify(companyContactPoint) + ',\n' +
  '  "address": ' + JSON.stringify(companyAddress) + '\n' +
  '}</script>';

// Print the schema code to the console
console.log(schemaCode);
