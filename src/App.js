import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FAQs from "./components/Faqs";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import AchievementsPage from "./components/AchivementsPage";
import Events from "./components/events";



import { useState, useEffect } from "react";
import video from "./assests/preloader.gif.gif";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="h-screen bg-black flex items-center justify-center lg:h-[900px]">
                    <img src={video} className="" alt="preloader video" />
                </div>
            ) : (
                <div>
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <Home />
                    </div>
                    <div>
                        <About />
                    </div>

                    <div>
                        <Teams />
                    </div>

                    <div>
                        <AchievementsPage />
                    </div>
                    <div>
                        <FAQs />
                    </div>
                    <div>
                        <Contact />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            )}
                <BrowserRouter>
      <Routes>
        <Route path="events" element={<Events/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default App;
