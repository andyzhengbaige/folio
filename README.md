# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Vercel deployment

[Link to deployment](https://folio-zeta-gilt.vercel.app/)

## The stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Clerk](https://clerk.com/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Setup

### Choose a setup below

- [Setup with Docker](#setup-with-docker)
- [Setup without Docker](#setup-without-docker)

### Setup with Docker 

1. [Download Docker](https://www.docker.com/products/docker-desktop/)

2. `docker -v` to check installation

3. run `docker compose build` in the root directory of the project

4. run `docker compose watch` to start the container for development

5. [localhost:3000](localhost:3000)

### Setup without Docker

[Download the latest version of Node.js](https://nodejs.org/en)

Check Installation

`node --version`

Install Yarn

`npm install --global yarn`

Check Installation

`yarn --version`

Install project dependencies

`yarn install`

Create .env file if it does not exist

Ask repo owner for environment variables

`yarn dev`



