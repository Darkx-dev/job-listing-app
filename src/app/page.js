"use client";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/Darkx-dev/job-listing-app/main/src/_data/data.json",
        );
        setData(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let tempData = [];
    filterList.forEach((filter) => {
      tempData = (filteredData.length > 1 ? filteredData : data)?.filter(
        (user) => {
          // Level check
          let isLevelMatch = user.level === filter;
          // Role check
          let isRoleMatch = user.role === filter;
          return isLevelMatch || isRoleMatch;
        },
      );
    });
    setFilteredData([...tempData]);
  }, [filterList]);

  const addFilter = (filterTarget) => {
    let filter = filterTarget.textContent.trim();
    if (!filterList.includes(filter)) {
      setFilterList([...filterList, filter]);
    }
  };

  const clearFilter = () => {
    setFilterList([]);
  };

  const removeFilter = (filter) => {
    let tempFilteredList = filterList.filter(
      (filterItem) => filterItem !== filter,
    );
    setFilterList(tempFilteredList);
  };

  return (
    <>
      {/* Header */}
      <header className="relative flex h-[156px] w-full justify-center bg-cyan-desaturated bg-desktop">
        {filterList.length > 0 && (
          <Filter
            filters={filterList}
            clearFilter={clearFilter}
            removeFilter={removeFilter}
          />
        )}
      </header>
      {/* Main */}
      <main className="min-h-[calc(100vh-156px)]">
        <div className="space-y-6 lg:mx-40 lg:my-16">
          {/* Users */}
          {data &&
            (filterList.length > 0 ? filteredData : data).map((user, _) => {
              return (
                <Card
                  key={user.id}
                  isNew={user.new}
                  idx={_}
                  {...user}
                  addFilter={addFilter}
                />
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Home;
