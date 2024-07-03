import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({
  id,
  logo,
  company,
  languages,
  position,
  postedAt,
  contract,
  location,
  isNew,
  featured,
  role,
  level,
  idx,
  tools,
  addFilter,
}) => {
  const animation = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.1,
      },
    },
  };
  return (
    <motion.div
      {...animation}
      className="relative flex rounded-md bg-white px-10 py-8 shadow-lg max-lg:flex-col max-lg:px-5 max-lg:py-4 lg:items-center"
      id={id}
    >
      <span
        className={`absolute left-0 top-0 block h-full w-1 rounded-l-md bg-cyan-desaturated ${!featured ? "hidden" : undefined}`}
      />
      <div className="pr-5 max-lg:pb-4" id="logo">
        <Image
          className="-top-6 h-auto w-auto max-lg:absolute max-lg:w-12"
          src={logo}
          height={55}
          width={80}
          alt="Logo"
          priority
        />
      </div>
      <div className="leading-none" id="info">
        <div className="flex flex-wrap gap-3 text-xs font-medium text-white *:rounded-xl [&>*:not(:first-child)]:p-small [&>*:not(:first-child)]:uppercase">
          <span
            className="pr-2 text-base font-bold text-cyan-desaturated"
            id="company"
          >
            {company}
          </span>
          <span
            className={`bg-cyan-desaturated ${!isNew ? "hidden" : undefined}`}
            id="new"
          >
            NEW!
          </span>
          <span
            className={`bg-cyan-grayish-dark-2 ${!featured ? "hidden" : undefined}`}
            id="featured"
          >
            Featured
          </span>
        </div>
        <h2
          className="my-1 cursor-pointer text-xl font-bold transition-colors hover:text-cyan-desaturated max-lg:text-base"
          id="position"
        >
          {position}
        </h2>
        <div className="flex flex-wrap gap-4 text-cyan-grayish-dark-1 *:text-nowrap max-lg:gap-2">
          <span id="postedAt">{postedAt}</span>•
          <span id="contract">{contract}</span>•
          <span id="location">{location}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 font-bold *:rounded-sm *:bg-cyan-grayish-light-2 *:p-small *:text-cyan-desaturated *:transition-colors hover:*:bg-cyan-desaturated hover:*:text-white max-lg:mt-3 max-lg:border-t-2 max-lg:pt-3 lg:ml-auto">
        <button onClick={(e) => addFilter(e.target)} id="role">
          {role}
        </button>
        <button onClick={(e) => addFilter(e.target)} id="level">
          {level}
        </button>
        {languages?.map((language, _) => {
          return (
            <button
              onClick={(e) => addFilter(e.target)}
              key={language}
              className="language"
              id={`language-${++_}`}
            >
              {language}
            </button>
          );
        })}
        {tools?.map((tool, _) => {
          return (
            <button
              onClick={(e) => addFilter(e.target)}
              key={tool}
              className="language"
              id={`language-${++_}`}
            >
              {tool}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Card;
