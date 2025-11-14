import { Toaster, toast } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Toaster richColors />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
