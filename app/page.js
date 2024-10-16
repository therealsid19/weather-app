"use client";
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import {useState} from "react";
import {BsSearch} from "react-icons/bs"

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    })
    setCity("");
    setLoading(false);
  }
  return (
    <div>

    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40'/>

      <Image
        src = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="fill"
        className="object-cover"
      />

    <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
      <form className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded">
        <input className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white" type="text" placeholder="Enter City" />
      
      <button onClick={fetchWeather}><BsSearch /></button>
      </form>
    </div>

    </div>
  );
}
