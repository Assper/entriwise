// TODO: Use real API data instead of mock
import { firstDataset, secondDataset } from "./mocks";
import type { SettlementApiResponse } from "./models";

export const getSettlements = (): Promise<SettlementApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(secondDataset as SettlementApiResponse), 1500)
  });
};
