import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import HomePg from "../../pages/home";
import LogInPg from "../../pages/login";
import SignUpPg from "../../pages/signup";

export default function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePg />} />
                <Route path="login" element={<LogInPg />} />
                <Route path="signup" element={<SignUpPg />} />
            </Routes>
        </Router>
    );
}