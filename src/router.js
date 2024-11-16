import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:id",
    element: <DetailsPage />,
  },
]);

export default router;
