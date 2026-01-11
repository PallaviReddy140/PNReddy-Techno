
# PNREDDY Techno School - Official Launch Manual

This website is ready for public use. Follow these steps to go live for parents and students.

## 1. Professional Hosting (Choose ONE)
### Option A: Vercel (Recommended)
1. Push this code to a **GitHub** repository.
2. Log in to [Vercel.com](https://vercel.com) and click "Add New Project".
3. Select your repository. Vercel will detect it as a static site and give you a live URL.
4. Add your custom domain (e.g., `pnreddytechnoschool.edu.in`) in the project settings.

### Option B: Netlify (Quickest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the entire project folder.
3. It will give you a temporary link. You can then link your domain.

## 2. Enabling Parent Emails (No Code Required)
The contact form is currently a "simulation." To receive real emails:
1. Go to [Formspree.io](https://formspree.io) and create a free account.
2. Create a "New Form" and name it "School Admissions".
3. Copy the "Endpoint URL" (it looks like `https://formspree.io/f/xyza...`).
4. Paste this URL into the `handleSubmit` function in `pages/ContactPage.tsx`.

## 3. Connecting the Live Gallery
1. Create a Google Sheet. Use the following headers in Row 1:
   `Category`, `Type`, `Title`, `Description`, `MediaURL`, `Tag`, `Year`, `IsSpotlight`
2. Go to `File > Share > Publish to Web`. 
3. Select **CSV** as the format and click Publish.
4. Copy the link and paste it into `services/cloudService.ts` in the `SHEET_CSV_URL` variable.

## 4. Final Verification Checklist
- [ ] Replace `+91 98765 43210` with the actual Office Mobile Number.
- [ ] Replace `Plot No 123...` with the actual School Address in `Footer.tsx` and `ContactPage.tsx`.
- [ ] Ensure the Google Maps iframe in `ContactPage.tsx` points to your exact building.
- [ ] Test the WhatsApp button on a mobile phone to ensure it opens the correct chat.
