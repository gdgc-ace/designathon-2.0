import { useEffect, useState } from "react";
import Preloader from "./Components/PreLoader/Preloader";
import MainPage from "./Pages/MainPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // keep your URL logic
    if (window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }

    // fake loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  
  // return (
  //   <MainPage />
  // );
}

export default App;
