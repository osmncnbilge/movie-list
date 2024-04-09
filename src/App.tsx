import MovieList from "./components/movie-list/MovieList";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useGetMovieByQuery } from "./features/movieSlice";
import Info from "./components/Info/Info";
import { RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  setMovieName,
  setMovieType,
  setMovieYear,
} from "./features/filterSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const movieName = useAppSelector((state: RootState) => state.filter.name);
  const movieType = useAppSelector((state: RootState) => state.filter.type);
  const movieYear = useAppSelector((state: RootState) => state.filter.year);

  const data = useGetMovieByQuery(
    `&s=${movieName}&type=${movieType}&y=${movieYear}`
  );
  const { status, currentData } = data;

  const handleChangeYear = (e: any) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      dispatch(setMovieYear(e.target.value));
    }
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Movie List
        </Typography>
        <Grid
          container
          justifyContent={"center"}
          style={{ margin: "10px 0px" }}
        >
          <Grid display={"flex"} columnGap={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="Movie Name"
                  value={movieName}
                  onChange={(e) => dispatch(setMovieName(e.target.value))}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <TextField
                  label="Year"
                  onChange={(e) => handleChangeYear(e)}
                  value={movieYear}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Type"
                  value={movieType}
                  onChange={(e) => dispatch(setMovieType(e.target.value))}
                >
                  <MenuItem value="movie">Movie</MenuItem>
                  <MenuItem value="series">Series</MenuItem>
                  <MenuItem value="episode">Episode</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        {status === "pending" ? (
          <Info>
            <h3>Loading...</h3>
          </Info>
        ) : currentData?.Search ? (
          <>
            <MovieList movies={currentData.Search} />
          </>
        ) : (
          <Info>
            <h3>{currentData?.Error}</h3>
          </Info>
        )}
      </Container>
    </>
  );
};

export default App;
