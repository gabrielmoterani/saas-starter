import Pricing from '@/components/Shared/Pricing'
import { getActiveProductsWithPrices, getSubscription } from '@/model/client/stripe.client'
import { getSession } from '@/model/client/user.client'

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription(),
  ])

  return (
    <Pricing
      session={session}
      user={session?.user}
      products={products as any}
      subscription={subscription as any}
    />
  )
}
