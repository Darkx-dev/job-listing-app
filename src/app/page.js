"use client"
import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(nugll)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("")
    }
  })
  return (
    <>
      <header className="flex h-[156px] w-full justify-center bg-cyan-desaturated bg-desktop"></header>
      <main className="lg:mx-40 lg:my-20">
        {/* Todo : Component return */}
        <div className="space-y-6"></div>
      </main>
    </>
  );
};

export default Home;
