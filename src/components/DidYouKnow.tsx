"use client"
import Image from "next/image";
import { useState,useEffect } from "react";

const financialFacts = [
    "The stock market has historically returned an average of 7% annually.",
    "Compounding interest can significantly grow your wealth over time.",
    "Saving 20% of your income is a common recommendation for financial health.",
    "ETFs offer a simple way to diversify your investments.",
    "Creating a budget helps you track spending and achieve financial goals."
  ];
  
  // DidYouKnow component for displaying random financial facts
  export const DidYouKnow = () => {
    const [fact, setFact] = useState("");
  
    useEffect(() => {
      // Function to pick a random fact
      const getRandomFact = () => {
        const randomIndex = Math.floor(Math.random() * financialFacts.length);
        setFact(financialFacts[randomIndex]);
      };
  
      // Set the first random fact
      getRandomFact();
  
      // Change fact every 10 seconds (10000 milliseconds)
      const intervalId = setInterval(() => {
        getRandomFact();
      }, 60000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md text-sm">
        <div className="flex items-center justify-start gap-2">
        <Image src={'/bulb.png'} alt="" width={32} height={32}/>
        <p className="font-bold text-md">Did you know</p>
        </div>
        
        <p className="mt-2 font-semibold text-gray-700 pl-3">{fact}</p>
      </div>
    );
  };
  