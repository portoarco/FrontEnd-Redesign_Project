// setup user data
import { createSlice } from "@reduxjs/toolkit";

interface IArticleState {
  title: string;
  author: string;
  lead: string;
  category: string;
  content: string;
  date: string;
//   picture: string;
//   objectId: string;
}

const initialData: IArticleState = {
  title: "",
  author: "",
  lead: "",
  category: "",
  content: "",
  date: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState: initialData,
  reducers: {
    setArticleSlice: (state, action) => {
      const { title, author,lead,category,content,date } = action.payload;
      state.title = title;
      state.author = author;
      state.lead = lead;
      state.category = category;
      state.content = content;
      state.date = date;
    },
  },
});

// export actions function --> diinfo ke UI
export const { setArticleSlice } = articleSlice.actions;
// export reducer function --> masuk ke store untuk memberi tau ada reducer userSlice
export default articleSlice.reducer;
