import { Suspense } from "react";
import Countries from "./components/countries/Countries";


const countryFlagPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
const App = () => {
  return (
    <>
      <Suspense fallback={<h1>wait some time for loading data.....</h1>}>
        <Countries countryFlagPromise={countryFlagPromise}></Countries>
      </Suspense>
    </>
  );
};

export default App;
