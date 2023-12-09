This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

***Live Demo*** - https://blog-app-lalwanimayur.vercel.app/

## Getting Started

1. Clone the repository
   
`git clone https://github.com/your-username/your-nextjs-mongodb-app.git`

`cd your-nextjs-mongodb-app`

2. Install Dependencies:

`npm install`

3. Environment Variables:

`MONGODB_URI=your_mongodb_connection_string`

`NEXT_PUBLIC_BASE_URL=`

4. Run the development server:

```npm run dev```

***MongoDB Setup and Configuration***

1. Create a MongoDB Atlas Account:

Visit MongoDB Atlas.
Sign up or log in to your account.

2. Create a Cluster:

Create a new cluster by following the instructions on MongoDB Atlas.

3. Get Connection String:

After setting up the cluster, obtain the connection string by going to "Connect" > "Connect Your Application".
Replace <password> and <dbname> with your database password and name.

4. Add Connection String to .env:

In your .env file, set the MONGODB_URI variable to your connection string.
