import React from "react";
import PropertiesList from "./Components/PropertiesList";
import Header from "./Components/Header";
import { FormProvider } from "./Lib/store";

function App() {
  return (
    <FormProvider>
      <Header />
      <PropertiesList />
    </FormProvider>
  );
}

export default App;
