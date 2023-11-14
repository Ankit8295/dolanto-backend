import axios from "axios";

export async function getData() {
  const res = await axios({
    url: `http://localhost:3000/api/getData`,
    method: "GET",
  });
  return res.data;
}
export async function createData(data: FormData) {
  console.log(data);
  const res = await axios({
    url: `http://localhost:3000/api/update-homepage`,
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  });
  return res.data;
}
