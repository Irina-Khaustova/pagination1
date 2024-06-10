import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPage: 1,
};

export const selectPageSlice = createSlice({
    name: "selectPage",
    initialState,
    reducers: {
      setMinusPage: (state, action) => {
        let select = state.selectedPage -1
        state.selectedPage = select;
      },
      setPlusPage: (state, action) => {
        let select = state.selectedPage +1
        state.selectedPage = select;
      },
      setSelectedPage: (state, action) => {
        state.selectedPage = action.payload;
      },
    },
});

export const { setMinusPage, setPlusPage, setSelectedPage } = selectPageSlice.actions;
export const selectPage = (state) => state.tselectPageSlice;
export default selectPageSlice.reducer;