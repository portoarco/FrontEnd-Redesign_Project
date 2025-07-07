// setup user data
import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  fullname: string;
  email: string;
  password: string;
}

const initialData: IUserState = {
  fullname: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    setUser: (state, action) => {
      const { fullname, email, password } = action.payload;
      state.fullname = fullname;
      state.email = email;
      state.password = password;
    },
  },
});

// export actions function --> diinfo ke UI
export const { setUser } = userSlice.actions;
// export reducer function --> masuk ke store untuk memberi tau ada reducer userSlice
export default userSlice.reducer;
