import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailPage from "./components/movie-detail/MovieDetailPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:movieId",
    element: <MovieDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
