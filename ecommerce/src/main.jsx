
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind'in eklendiğinden emin olun
import { Provider } from "react-redux"; // Redux Provider'ı ekle
import store from "./api/Store"; // Store'u içe aktar

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> {/* Store'u sağlayan Provider */}
    <App />
  </Provider>
);
