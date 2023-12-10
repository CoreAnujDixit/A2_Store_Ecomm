import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'


import App from "./App";
import { Store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

  <BrowserRouter>

    <Provider store={Store}>
      <App />
      <Toaster />

    </Provider>
  </BrowserRouter>
);
