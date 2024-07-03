import Image from "next/image";

const Filter = ({ filters, clearFilter, removeFilter }) => {
  return (
    <div className="absolute -bottom-[28px] left-0 w-full">
      <div className="mx-40 flex h-[58px] flex-wrap items-center gap-4 rounded-md bg-white px-3 font-bold shadow-lg [&>*:not(:last-child)]:bg-cyan-grayish-light-2 [&>*:not(:last-child)]:text-cyan-desaturated [<&*:not(:last-child)]:rounded-md">
        {filters &&
          filters.map((filter, _) => {
            return (
              <span key={_} className="flex rounded-[5px] pl-2">
                {filter}
                <button
                  className="ml-1 flex w-6 cursor-pointer rounded-r-[5px] bg-cyan-desaturated transition-colors hover:bg-cyan-grayish-dark-2"
                  onClick={() => removeFilter(filter)}
                >
                  <Image
                    className="m-auto h-auto w-auto"
                    src="/images/icon-remove.svg"
                    width={12}
                    height={12}
                    alt="X"
                  />
                </button>
              </span>
            );
          })}
        <button
          className="ml-auto text-cyan-grayish-dark-1 transition-colors hover:text-cyan-desaturated hover:underline"
          onClick={clearFilter}
          id="clear"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
