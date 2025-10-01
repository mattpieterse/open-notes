import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import Lost from '@/pages/Lost.tsx'
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {Toaster} from "sonner";
import {ThemeHoster} from "@/components/root/ThemeHoster.tsx";
import {isTauriApp} from "@/utils/environment-utility.ts";

const Router = isTauriApp() ? HashRouter : BrowserRouter;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <ThemeHoster
                defaultTheme="light"
                storageKey="theming"
            >
                <Toaster/>
                <Routes>
                    <Route
                        path={"/"}
                        element={
                            <App/>
                        }
                    />

                    <Route
                        path={"*"}
                        element={
                            <Navigate to="/oops" replace/>
                        }
                    />

                    <Route
                        path={"/oops"}
                        element={
                            <Lost/>
                        }
                    />
                </Routes>
            </ThemeHoster>
        </Router>
    </StrictMode>
)
