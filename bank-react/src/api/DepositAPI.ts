import { config } from "./config";

const API_URL = config.API_URL + "/depositAccount/";

export const getAllDeposit = async () => {
   const rawData = await fetch(API_URL);
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getDepositByID = async (id: any) => {
   const rawData = await fetch(API_URL + id);
   if (rawData.status === 200) return rawData.json();
   return {};
};

export const updateDeposit = async (deposit: any) => {
   const rawData = await fetch(API_URL + deposit.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deposit),
   });
   return rawData;
};

export const deleteDeposit = async (id: any) => {
   const rawData = await fetch(API_URL + id, {
      method: "DELETE",
   });
   return rawData;
};

export const insertDeposit = async (deposit: object) => {
   const rawData = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deposit),
   });
   return rawData;
};
