import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <>
            <AnimatePresence>
                <Router />
            </AnimatePresence>
        </>
    );
}

export default App;
