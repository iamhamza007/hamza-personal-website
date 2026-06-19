# Hamza Feroz Personal Website

Premium personal portfolio for Hamza Feroz, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, lucide-react, Resend, and Zod.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form Setup

Create `.env.local` from `.env.example`:

```bash
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=imhamza020207@gmail.com
CONTACT_FROM_EMAIL=Portfolio <hello@yourdomain.com>
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified in Resend.

## Deployment

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in Vercel Project Settings.
4. Add the custom domain in Vercel Project Settings.
5. Configure DNS records at the domain registrar as Vercel instructs.
6. Redeploy and test the production contact form.
