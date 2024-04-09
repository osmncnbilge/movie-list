import React, { useState } from "react";
import { Paper, TablePagination } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export type moviesType = Array<{
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}>;

interface MoiveListProps {
  movies: moviesType;
}

const MovieList = ({ movies }: MoiveListProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  // styled component
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledLink = styled(Link)(() => ({
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
    "&:hover": {
      color: "#0000EE",
      textDecoration: "underline",
    },
  }));

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Film Name</StyledTableCell>
              <StyledTableCell>Release Date</StyledTableCell>
              <StyledTableCell>IMDb ID</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {movies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((movie, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{movie.Title}</StyledTableCell>
                  <StyledTableCell>{movie.Year}</StyledTableCell>
                  <StyledTableCell style={{ cursor: "pointer" }}>
                    <StyledLink to={`/${movie.imdbID}`}>
                      {movie.imdbID}
                    </StyledLink>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={movies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default MovieList;
