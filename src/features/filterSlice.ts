import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterSlice {
  name: string;
  year: string;
  type: string;
}

const initialState: FilterSlice = {
  name: "Pokemon",
  year: "",
  type: "movie",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMovieName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setMovieYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setMovieType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { setMovieName, setMovieYear, setMovieType } = filterSlice.actions;
export default filterSlice.reducer;
