import axios from "axios";
export async function getData() {
  const res = await axios({
    url: `http://localhost:3002/api/getData`,
    method: "GET",
  });
  return res.data;
}
export async function createData(data: any) {
  const res = await axios({
    url: `http://localhost:3002/api/createData`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return res.data;
}
