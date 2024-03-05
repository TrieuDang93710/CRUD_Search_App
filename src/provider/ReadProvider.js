import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import ReadScreen from "../screen/ReadScreen";

const ReadProvider = () => {
  return (
    <Provider store={store} serverState={store}>
      <ReadScreen store={store} />
    </Provider>
  );
};

export default ReadProvider;
