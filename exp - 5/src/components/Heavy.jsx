import { useMemo } from "react";

function Heavy({ number }) {
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 100000000; i++) {}  // simulate heavy work
    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return <h3>Heavy Result: {result}</h3>;
}

export default Heavy;