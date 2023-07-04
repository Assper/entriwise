export const config = {
  amazon: {
    paymentsCentral: {
      transactionsUrl: 'https://sellercentral.amazon.com/gp/payments-account/view-transactions.html'
    }
  }
} as const;

export type Config = typeof config;
