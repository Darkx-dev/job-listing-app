import Image from "next/image";
import { motion } from "framer-motion";

const Filter = ({ filters, clearFilter, removeFilter }) => {
  const animation = {
    initial: { opacity: 0, y: -20, scale: 0.5 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };
  return (
    <motion.div
      {...animation}
      className="absolute -bottom-[28px] left-0 w-full"
    >
      <div className="mx-40 max-lg:mx-4 flex min-h-[58px] py-4 flex-wrap items-center gap-4 rounded-md bg-white px-3 font-bold shadow-lg [&>*:not(:last-child)]:bg-cyan-grayish-light-2 [&>*:not(:last-child)]:text-cyan-desaturated [<&*:not(:last-child)]:rounded-md">
        {filters &&
          filters.map((filter, _) => {
            return (
              <motion.span
                {...animation}
                key={_}
                className="flex rounded-[5px] pl-2"
              >
                <span className="pb-0 pt-1">{filter}</span>
                <button
                  className="ml-2 flex w-7 cursor-pointer rounded-r-[5px] bg-cyan-desaturated transition-colors hover:bg-cyan-grayish-dark-2"
                  onClick={() => removeFilter(filter)}
                >
                  <Image
                    className="m-auto h-auto w-auto"
                    src="/images/icon-remove.svg"
                    width={10}
                    height={10}
                    alt="X"
                  />
                </button>
              </motion.span>
            );
          })}
        <button
          className="ml-auto text-cyan-grayish-dark-1 font-medium transition-colors hover:text-cyan-desaturated hover:underline"
          onClick={clearFilter}
          id="clear"
        >
          Clear
        </button>
      </div>
    </motion.div>
  );
};

export default Filter;
