import axios from "axios";

export async function getData() {
  const res = await axios({
    url: `http://localhost:3000/api/getData`,
    method: "GET",
  });
  return res.data;
}
export async function createData(data: any) {
  const res = await axios({
    url: `http://localhost:3000/api/createData`,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return res.data;
}
