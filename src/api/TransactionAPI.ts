import { config } from "./config";

const API_URL = config.API_URL + "/transaction/";

export const insertTranstion = async (tran: any) => {
   const rawData = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tran),
   });
   return rawData;
};

export const deleteTransaction = async (id: any) => {
   const rawData = await fetch(API_URL + id, {
      method: "DELETE",
   });
   return rawData;
};

export const transferMoney = async (
   amount: any,
   idCredit: any,
   idDeposit: any,
) => {
   const rawData = await fetch(
      API_URL +
         `depositToCredit?amount=${amount}&id_credit=${idCredit}&id_deposit=${idDeposit}`,
      {
         method: "POST",
      },
   );
   return rawData;
};
