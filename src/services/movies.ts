import axios from "axios";

import { config } from "../config/secret";

export const postMovie = async (data: {}) => {
  try {
    const response = await axios.post(`${config.API_URL}/movies`, {
      ...data,
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};

export const getMovies = async () => {
  try {
    const response = await axios.get(`${config.API_URL}/movies`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};

export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(`${config.API_URL}/movies/${id}}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};

export const deleteMovie = async (id: string) => {
  try {
    const response = await axios.delete(`${config.API_URL}/movies/${id}}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
