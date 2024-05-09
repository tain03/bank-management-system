import { config } from "./config";

const API_URL = config.API_URL + "/employee/";

export const getAllEmployee = async () => {
   const rawData = await fetch(API_URL);
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getEmployeeByID = async (id: number) => {
   const rawData = await fetch(API_URL + id);
   if (rawData.status === 200) return rawData.json();
   return {};
};

export const searchEmployee = async (keyword: string) => {
   const rawData = await fetch(API_URL + "search/" + keyword);
   if (rawData.status === 200) return rawData.json();
   return [];
};

export const getEmployeeSalary = async (id: any, time: any) => {
   const rawData = await fetch(
      API_URL + `calculateSalary?id_employee=${id}&month=${time}`,
   );
   if (rawData.status === 200) {
      const salary = await rawData.json();
      return salary.salary;
   }
   return NaN;
};

export const updateEmployee = async (employee: any) => {
   const rawData = await fetch(API_URL + employee.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
   });
   return rawData;
};

export const deleteEmployee = async (id: number) => {
   const rawData = await fetch(API_URL + id, {
      method: "DELETE",
   });
   return rawData;
};

export const insertEmployee = async (employee: object) => {
   const rawData = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
   });
   return rawData;
};
