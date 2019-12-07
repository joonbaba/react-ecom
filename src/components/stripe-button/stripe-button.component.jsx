import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_JW44xDE68vdAIqUW6Y3lnPte"

  const onToken = token => {
    console.log(token)
    alert("Payment Succesful!")
  }

  return (
    <StripeCheckout
      lable="Pay Now"
      name="SellGreenz"
      billingAddress
      shippingAddress
      currency="USD"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
