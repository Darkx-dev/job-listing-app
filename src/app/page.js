"use client";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
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
    const tempData = data;
    let arr = tempData.filter((user) => {
      return filterList.every((filter) => {
        return (
          user.role.includes(filter) ||
          user.level.includes(filter) ||
          user.languages.includes(filter) ||
          user.tools.includes(filter)
        );
      });
    });
    setFilteredData(arr);
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
        <div className="mx-40 my-16 space-y-6 max-lg:mx-4 max-lg:space-y-12">
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
