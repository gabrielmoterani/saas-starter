# Project setup

Before we start building we're going to set up our Database and API. This is as simple as starting a new Project in Supabase and then creating a "schema" inside the database.

## Create a project

1. (Create a new project)[https://app.supabase.com/] in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

## Set up the database schema

Now we are going to set up the database schema. We can use the "Stripe Subscription" quickstart in the SQL Editor, or you can just copy/paste the SQL from below and run it yourself.

1. Go to the (SQL Editor)[https://app.supabase.com/project/_/sql] page in the Dashboard.
2. Click Stripe Subscription Starter.
3. Click Run.
   (the stripe subscription starter sql is also in docs/utils in case supabase does not provide it anymore)

## Get the API Keys

Now that you've created some database tables, you are ready to insert data using the auto-generated API. We just need to get the Project URL and anon key from the API settings.

1. Go to the (API Settings)[https://app.supabase.com/project/_/settings/api] page in the Dashboard.
2. Find your Project URL, anon, and service_role keys on this page.
3. And finally we want to save the environment variables in a .env.development. All we need are the API URL and the anon key that you copied earlier.

## Set ENV URL

1. Go to the (URL Setting) [https://app.supabase.com/project/_/auth/url-configuration] page in the Dashboard
2. Add the base url of your application (your domain or lvh.me:5001).
3. Change the baseurl in the .env files
