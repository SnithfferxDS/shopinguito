import { API_URL } from '@Configs/constants.js';
import { getParams } from '@Utils/functions.js';
import axios from "axios";

export async function getData(resource, data) {
  let endpoint = `${API_URL}/${resource}.php`;
  if (data !== undefined) {
    endpoint += `?${getParams}`;
  }
  try {
    const Response = await axios.get(endpoint).then((res) => res.json());
    if (Response !== undefined) {
      return Response.data;
    }
  } catch (er) {
    if (er instanceof Error) {
      console.log(er);
    }
  }
}

export async function sendData(resource, data) {
  let endpoint = `${API_URL}/${resource}.php`;
  try {
    const Response = await axios
      .post(endpoint, {
        method: 'post',
        data: JSON.stringify(data),
        Headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json());
    if (Response !== undefined) {
      return Response.data;
    }
  } catch (er) {
    if (er instanceof Error) {
      console.log(er);
    }
  }
}

export async function updateData(resource, data) {
  let endpoint = `${API_URL}/${resource}.php`;
  try {
    const Response = await axios
      .put(endpoint, {
        method: 'put',
        data: JSON.stringify(data),
        Headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json());
    if (Response !== undefined) {
      return Response.data;
    }
  } catch (er) {
    if (er instanceof Error) {
      console.log(er);
    }
  }
}

export async function deleteData(resource, data) {
  let endpoint = `${API_URL}/${resource}.php`;
  try {
    const Response = await axios
      .delete(endpoint, {
        method: 'delete',
        data: JSON.stringify(data),
        Headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json());
    if (Response !== undefined) {
      return Response.data;
    }
  } catch (er) {
    if (er instanceof Error) {
      console.log(er);
    }
  }
}
