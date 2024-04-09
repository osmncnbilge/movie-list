import {
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useGetMovieByImdbIDQuery } from "../../features/movieSlice";
import Info from "../Info/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MovieDetailPage = () => {
  const params = useParams<{ movieId: string }>();
  const data = useGetMovieByImdbIDQuery(`${params.movieId}`);
  const { status, currentData: movie } = data;

  return (
    <>
      {status === "pending" ? (
        <Info>
          <h3>Loading...</h3>{" "}
        </Info>
      ) : movie ? (
        <>
          <Container maxWidth="lg" style={{ marginTop: "20px" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Movie Detail
            </Typography>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={1}>
                <Link to={"/"}>
                  <IconButton aria-label="delete" size="large">
                    <ArrowBackIcon />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={5} sx={{ p: 2 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={movie.Poster}
                      alt={movie.Title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.Title} ({movie.Year})
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Director:</strong> {movie.Director}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Actors:</strong> {movie.Actors}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Genre:</strong> {movie.Genre}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Language:</strong> {movie.Language}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Country:</strong> {movie.Country}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>IMDb Rating:</strong> {movie.imdbRating} (
                        {movie.imdbVotes} votes)
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Box Office:</strong> {movie.BoxOffice}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>DVD Release:</strong> {movie.DVD}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Awards:</strong> {movie.Awards}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={5} sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Plot
                  </Typography>
                  <Typography variant="body1">{movie.Plot}</Typography>
                </Paper>
                <Paper elevation={5} sx={{ p: 2, marginTop: "20px" }}>
                  <Typography variant="h6" gutterBottom>
                    Ratings
                  </Typography>
                  <List>
                    {movie.Ratings.map((rating, index) => (
                      <ListItem key={index}>
                        <ListItemText
                          primary={rating.Source}
                          secondary={rating.Value}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <Info>
          <h3>Movie Not Found!</h3>
        </Info>
      )}
    </>
  );
};

export default MovieDetailPage;
