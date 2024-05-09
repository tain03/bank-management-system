import { config } from "./config";

const API_URL = config.API_URL + "/creditAccount/";

export const getAllCredit = async () => {
   const rawData = await fetch(API_URL);
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getCreditByID = async (id: any) => {
   const rawData = await fetch(API_URL + id);
   if (rawData.status === 200) return rawData.json();
   return {};
};

export const getByTimeTransaction = async (
   idClient: any,
   start: any,
   end: any,
) => {
   const rawData = await fetch(
      API_URL +
         `getByTimeTransaction?end=${end}&id_client=${idClient}&start=${start}`,
   );
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getByBalance = async () => {
   const rawData = await fetch(API_URL + "getByBalance");
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const updateCredit = async (credit: any) => {
   const rawData = await fetch(API_URL + credit.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credit),
   });
   return rawData;
};

export const deleteCredit = async (id: any) => {
   const rawData = await fetch(API_URL + id, {
      method: "DELETE",
   });
   return rawData;
};

export const insertCredit = async (credit: object) => {
   const rawData = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credit),
   });
   return rawData;
};
