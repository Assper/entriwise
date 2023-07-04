import { format } from "date-fns";
import { config } from "../config";
import { SettlementStatus } from "./enums";
import type { Settlement } from "./api/settlements";

export const getPaymentsTransactionsUrl = (financialEventGroupId: string): string => {
  const params = new URLSearchParams({
    subview: 'groups',
    groupId: financialEventGroupId
  });
  return `${config.amazon.paymentsCentral.transactionsUrl}?${params}`;
};

export const formatDate = (dateString: string): string => {
  const dateFormat = 'MMM dd';
  return format(new Date(dateString), dateFormat);
};

export const getSettlementStatus = ({
  totalAmount,
  importedAmount,
  importedIgnoredAmount,
  isGettingRefunds,
  isGettingAddresses,
  planUpgradeNeeded,
  covered,
  open
}: Settlement): {
  status: SettlementStatus;
  value: string;
} => {
  if (importedAmount !== undefined && totalAmount === importedAmount || (!importedAmount && importedIgnoredAmount)) {
    return {
      status: SettlementStatus.FullyImported,
      value: `$${importedAmount.toFixed(2)}`
    };
  }

  if (isGettingRefunds || isGettingAddresses) {
    return {
      status: SettlementStatus.FetchingEvents,
      value: 'Fetching refund events'
    };
  }

  if (planUpgradeNeeded) {
    return {
      status: SettlementStatus.Upgrade,
      value: 'Upgrade from Lite'
    };
  }

  if (!covered) {
    return {
      status: SettlementStatus.Buy,
      value: 'No subscription'
    };
  }

  if (!importedAmount && !importedIgnoredAmount) {
    return {
      status: SettlementStatus.NotImported,
      value: open ? 'Open' : `$${totalAmount.toFixed(2)}`
    };
  }

  if (totalAmount !== importedAmount && (totalAmount || importedIgnoredAmount)) {
    return {
      status: SettlementStatus.IncompleteImport,
      value: 'Incomplete'
    };
  }
};
