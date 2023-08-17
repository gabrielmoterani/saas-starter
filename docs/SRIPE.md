# Project setup

Before we start building we're going to set up our Account on Stripe.

## Create a project

1. (Create a new account)[https://dashboard.stripe.com/] in the Stripe Dashboard.
2. Enter your account details.

## Get the API Keys

Now that you've created our Stripe account, we need to get the Publishable key, Secret Key and a Webhook secret.

1. Go to the (API Settings)[https://dashboard.stripe.com/apikeys] page in the Dashboard. (API Settings DEV)[https://dashboard.stripe.com/test/apikeys]
2. Copy Publishable key and Secret Key.
3. Save those keys in the .env file.
4. Go to the (Webhook page)[https://dashboard.stripe.com/test/webhooks]. Add an endpoint.
5. When adding a new endpoint use the url path of your domain with the subdir: /api/webhooks
   eg.: https://lvh.me:5001/api/webhooks
6. Select all events
7. Copy the webhook secret and paste in your .env file.

## Create a product in catalog.

1. Go to the products (page)[https://dashboard.stripe.com/products].
2. Create a recurrency product.
3. When creating a product the stripe api will send a request to this app webhook to populate our database with the product. Make sure that either the webhook is running to receive this endpoint request or use stripe cli to deliver the event on your local machine.

Products are the entity of what is going to be bought by the customers. Always make sure that the stripe and database are sync.

If you want to receive the events on your local machine you can run the following command:

`stripe listen --forward-to localhost:5001/api/webhooks`

## Configure the Stripe customer portal

Set your custom branding in the settings
Configure the Customer Portal settings
Toggle on "Allow customers to update their payment methods"
Toggle on "Allow customers to update subscriptions"
Toggle on "Allow customers to cancel subscriptions"
Add the products and prices that you want
Set up the required business information and links
