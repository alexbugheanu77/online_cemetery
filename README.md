This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Online Cemetery - Digital Memorial Platform

A full-stack web application for creating and managing digital memorials for deceased loved ones. This platform allows users to create personalized digital gravestones, share memories, and connect with others in remembrance.

## Core Features

- **User Authentication**
  - Email/password and Google authentication
  - Guest mode for viewing memorials

- **Memorial Page Creation**
  - Personalized digital gravestones
  - Biography sections
  - Photo & video uploads
  - Custom epitaphs
  - Virtual flowers & candles

- **Interactive Tributes**
  - Comments and condolences
  - Virtual candles with animations
  - Tribute images and videos
  - Memory sharing

- **Family & Genealogy Tree Integration**
  - Connect deceased relatives to form digital family trees

- **AI-powered Legacy Assistant**
  - Premium feature that mimics speech of the deceased

- **Search & Categories**
  - Search by name, date, location
  - Categorized memorials

- **Subscription Plans**
  - Free basic memorials
  - Premium features with subscription

## Tech Stack

- **Frontend**: Next.js with TailwindCSS
- **Backend**: Node.js (Express) with MongoDB
- **Authentication**: Firebase
- **File Storage**: AWS S3
- **Payments**: Stripe
- **AI Features**: OpenAI API
- **Deployment**: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

[MIT](LICENSE)
