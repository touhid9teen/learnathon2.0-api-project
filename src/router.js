import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Counter from "./component/Counter/Counter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Counter",
        element: <Counter />,
    },
    {
        path: "/About",
        element: <About />,
    },
    
]);
export default router;