import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      console.log(userInfo);
      const response = await axios.post('/users/login', userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('/users/logout', async () => {});

export const refreshUser = createAsyncThunk('auth/refresh', async () => {});
