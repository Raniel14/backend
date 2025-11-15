<!-- Set API URL from environment variables -->
<script>
  // Get API URL from environment or use a default
  window.API_URL = window.API_URL || (
    typeof process !== 'undefined' && process.env.API_URL ? process.env.API_URL :
    (window.location.hostname === 'localhost' ? 'http://localhost:5000' : '')
  );
  
  // If running on Netlify, you can set the API_URL environment variable in Netlify dashboard
  // or modify this to point to your backend URL
  if (!window.API_URL && window.location.hostname !== 'localhost') {
    // For production, set your backend URL here or use a Netlify environment variable
    window.API_URL = '/api'; // Relative path if backend is on same domain
    // OR set it to your backend URL:
    // window.API_URL = 'https://your-backend-url.com';
  }
</script>
