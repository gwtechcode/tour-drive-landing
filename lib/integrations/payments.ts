export type PaymentIntent = {
  reservationId: string;
  amountInCents: number;
  currency: "BRL";
};

export interface PaymentProvider {
  createCheckout(input: PaymentIntent): Promise<{ checkoutUrl: string }>;
}
