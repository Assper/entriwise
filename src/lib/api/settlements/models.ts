export type Settlement = {
  endDate: string, // format YYYY-MM-DD
  startDate: string, // format YYYY-MM-DD
  marketplaceName: string,
  totalAmount?: number,
  currency?: string,
  financialEventGroupId?: string,
  reportId?: string,
  importedAmount?: number,
  importedFeeAmount?: number,
  importedIgnoredAmount?: number,
  importedNegativeAdjustments?: number,
  importedOrderAmount?: number,
  importedOtherAmount?: number,
  importedPositiveAdjustments?: number,
  importedRefundAmount?: number,
  id?: string,
  plan: string,
  subscriptionId: string,
  covered: boolean,
  planUpgradeNeeded: boolean,
  isGettingRefunds: boolean,
  isGettingAddresses: boolean
  open?: boolean
}

export type SettlementApiResponse = {
  settlements: Settlement[]
  pendingCount: number
}
