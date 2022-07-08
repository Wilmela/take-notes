import { useEffect } from "react";
import { Routes, Route,} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";

import NoteNotFound from "./pages/NoteNotFound";

import Aos from "aos";

const App = () => {
  useEffect(()=>{
    Aos.init();
    Aos.refresh()
  });

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          <Route path="*" element={<NoteNotFound />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
