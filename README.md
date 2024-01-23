This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To Initialize/Clone this project:

```bash
git clone https://github.com/Kkura02/weather_app_nextjs
# go to the folder:
cd weather_app_nextjs
# install the npm packages
npm install
```

Try First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Git Guides

Git Policies to do in this project:

To Establish Connection to Git Remote:

```bash
# Do this first before proceeding
git remote add origin https://github.com/Kkura02/weather_app_nextjs
```

    To Pull from Git Repo:

    ```bash


    git pull origin master
    ```

    To Pull from Git Repo, but from another branch:

    ```bash
    git pull origin <branch-name>

    # if unsure of names, list branch names
    git branch
    ```

    To copy a branch to another branch:

    ```bash
    git pull origin <src>:<dest>
    ```

    To create a new branch:

    ```bash
    git branch <branch-name>

    # push that new branch to the remote repo:
    git push origin <branch-name>
    ```




    To Push your changes to Git Repo[WARNING ALWAYS PUSH ON DEV branch ONLY]

    ```bash
    # first add the files that you made changes with
    # example
    git add Readme.md ./app/page.tsx

    # commit the changes with description
    git commit -m "your message"

    # push your changes to dev, only to dev!
    git push origin dev
    ```
