import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { total, nights, startDate, endDate } = await req.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'ngn',
        product_data: { name: `${nights} Night Stay` },
        unit_amount: total * 100, // kobo equivalent
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.get('origin')}/success`,
    cancel_url: `${req.headers.get('origin')}/`,
  });
  return Response.json({ url: session.url });
}