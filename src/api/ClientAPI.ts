import { config } from "./config";

const API_URL = config.API_URL + "/client/";

export const getAllClient = async () => {
   const rawData = await fetch(API_URL, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
   });
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getClientByID = async (id: any) => {
   const rawData = await fetch(API_URL + id, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
   });
   if (rawData.status === 200) return rawData.json();
   return {};
};

export const searchClient = async (keyword: string) => {
   const rawData = await fetch(API_URL + "search/" + keyword);
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getTop10Client = async () => {
   const rawData = await fetch(API_URL + "topTen");
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const updateClient = async (client: any) => {
   const rawData = await fetch(API_URL + client.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json", 'ngrok-skip-browser-warning': 'true' },
      body: JSON.stringify(client),
   });
   return rawData;
};

export const deleteClient = async (id: number) => {
   const rawData = await fetch(API_URL + id, {
      method: "DELETE",
   });
   return rawData;
};

export const insertClient = async (client: object) => {
   const rawData = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", 'ngrok-skip-browser-warning': 'true' },
      body: JSON.stringify(client),
   });
   return rawData;
};
