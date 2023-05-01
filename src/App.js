import React from "react";
import data from "./data";
import SingleQuestion from "./Question";

export default function App() {
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.map((ele) => {
          return <SingleQuestion data={ele} key={ele.id} />;
        })}
      </section>
    </main>
  );
}
