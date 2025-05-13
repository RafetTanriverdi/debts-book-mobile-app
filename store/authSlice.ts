// src/store/authSlice.ts
import { supabase } from '@/lib/supabase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';

export const fetchSession = createAsyncThunk(
  'auth/fetchSession',
  async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    session: null as Session | null,
    loading: true,
  },
  reducers: {
    setSession(state, action) {
      state.session = action.payload;
      state.loading = false;
    },
    clearSession(state) {
      state.session = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.session = action.payload;
      state.loading = false;
    });
  },
});

export const { setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;
