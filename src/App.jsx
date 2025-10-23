import './styles/main.scss';
import {createBrowserRouter} from "react-router";
import {ROUTES} from "./routes/ROUTES.jsx";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {PulseLoader} from "react-spinners";
import {Toaster} from "sonner"
import ThemeProvider, {useTheme} from "./components/theme-provider.jsx";

function App() {
    const routes = createBrowserRouter(ROUTES);
    return (
        <ThemeProvider>
            <Suspense fallback={<PulseLoader/>}>
                <RouterProvider router={routes}/>
                <Toaster richColors position="bottom-right"/>
            </Suspense>
        </ThemeProvider>
    )
}

export default App