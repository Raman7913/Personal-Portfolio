import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
    const [loading, setLoading] = useState(true);
    return (
        <>{loading && <LoadingScreen onComplete={() => setLoading(false)} />}</>
    );
};

export default App;
