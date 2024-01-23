"use client";

import Image from "next/image";
import { useState } from "react";
import SearchCityForm from "@/app/components/SearchCityForm";
import WeatherShow from "@/app/components/WeatherShow";

export default function Home() {
  // Add here the fetch API code
  const [onSearch, setOnSearch] = useState(true);
  return;
  <main>{onSearch ? <SearchCityForm /> : <WeatherShow />}</main>;
}
