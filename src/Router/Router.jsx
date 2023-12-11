import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = createBrowserRouter([...PrivateRouter, ...PublicRouter]);

// export

export default Router;
