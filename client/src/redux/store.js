import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  user: userReducer,
}); // combining all the slices to create one single rootReducer which manages the entire app state

const persistConfig = {
  key: "root", // name of the key which will be saved with info in the localStorage
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // makes our rootReducer persist acc to the config provided

export const store = configureStore({
  reducer: persistedReducer, // adding the persisted reducer as the main and only reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // make our store persist and this persistor will be passed as a prop to the persistGate wrapper which wraps the entire app
