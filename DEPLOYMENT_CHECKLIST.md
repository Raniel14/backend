# Netlify Deployment Checklist

Use this checklist before and after deploying to Netlify.

## Pre-Deployment

- [ ] All code is committed to Git
- [ ] Repository is pushed to GitHub
- [ ] No sensitive data (API keys, passwords) in code
- [ ] `config.js` is present in `frontend/` directory
- [ ] `netlify.toml` is present in root directory
- [ ] All HTML files include `<script src="config.js"></script>`
- [ ] Backend API is deployed and accessible
- [ ] Backend has CORS enabled for your Netlify domain

## Netlify Setup

- [ ] Netlify account created (https://netlify.com)
- [ ] Repository connected to Netlify
- [ ] Build settings configured:
  - [ ] Base directory: `.` (empty or root)
  - [ ] Publish directory: `frontend`
  - [ ] Build command: empty or `echo 'No build step'`
- [ ] Environment variables configured:
  - [ ] `API_URL` set to your backend URL

## Post-Deployment

- [ ] Site deployed successfully (shows green "Deploy" indicator)
- [ ] Site loads without errors (check Console tab)
- [ ] Homepage loads and displays products
- [ ] Product details page accessible
- [ ] Login/Signup forms accessible
- [ ] API calls working (check Network tab, verify no 404 errors)
- [ ] Images loading correctly
- [ ] Cart functionality working
- [ ] Admin panel accessible (if applicable)

## Testing

Run through these tests on your live Netlify site:

### Navigation
- [ ] All links work and navigate correctly
- [ ] Back buttons work
- [ ] URL history works

### Products
- [ ] Products list loads from API
- [ ] Product images display
- [ ] "Add to cart" button works
- [ ] Product detail page loads

### Cart
- [ ] Can add items to cart
- [ ] Cart persists after page refresh
- [ ] Can remove items from cart
- [ ] Cart total calculates correctly

### Authentication (if applicable)
- [ ] Login form works
- [ ] Signup form works
- [ ] Dashboard loads after login
- [ ] Admin panel works (if you're admin)
- [ ] Logout clears session

### Performance
- [ ] Pages load within 2-3 seconds
- [ ] No console JavaScript errors
- [ ] Network requests complete successfully
- [ ] Images are optimized

## Troubleshooting

If something doesn't work:

1. **Check Netlify Deploy Logs**
   - Site settings → Deployments → View logs
   - Look for errors during build/deployment

2. **Check Browser Console**
   - Press F12 → Console tab
   - Look for JavaScript errors

3. **Check Network Tab**
   - Press F12 → Network tab
   - Check API calls (should hit your backend)
   - Look for 404 or CORS errors

4. **Verify Environment Variables**
   - Site settings → Build & deploy → Environment
   - Confirm API_URL is set correctly

5. **Test Backend Directly**
   - Use Postman or curl to test your API
   - Verify it's accessible and returning data

## Common Issues & Solutions

### Products not loading
- Check API_URL in Netlify environment variables
- Verify backend is running and accessible
- Check browser console for fetch errors
- Ensure backend has CORS enabled

### Images not displaying
- Verify backend is serving images with correct URLs
- Check if image paths need protocol (http/https)
- Ensure backend CORS allows image requests

### Console shows "undefined API"
- Verify config.js is loaded before other scripts
- Check network tab to confirm config.js loads
- Verify script tag is in correct position in HTML head

### Blank page or white screen
- Check browser console for errors
- Verify all scripts loaded (Network tab)
- Check if JavaScript is disabled
- Try clearing browser cache

### CORS errors when calling API
- Add Netlify domain to backend CORS allowlist
- Backend should allow requests from your-site.netlify.app
- Format: `https://your-site.netlify.app`

## Quick Commands

### Monitor Deployment
```bash
netlify status
```

### View Logs
```bash
netlify log
```

### Redeploy
```bash
netlify deploy --prod --dir frontend
```

## Support

- Netlify Support: https://support.netlify.com/
- Documentation: https://docs.netlify.com/
- Community Forums: https://community.netlify.com/

---

**After completing deployment, you're ready to share your site!** 🎉

Share your Netlify URL: https://your-site.netlify.app/
