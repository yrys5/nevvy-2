import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import reportWebVitals from "./features/auth/services/reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./context/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
