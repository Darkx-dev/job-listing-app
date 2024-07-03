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
      className="relative flex items-center rounded-md bg-white px-10 py-8 shadow-lg"
      id={id}
    >
      <span
        className={`absolute left-0 block h-full w-1 rounded-l-md bg-cyan-desaturated ${!featured ? "hidden" : undefined}`}
      />
      <div className="pr-5" id="logo">
        <Image
          className="h-auto w-auto"
          src={logo}
          height={55}
          width={80}
          alt="Logo"
          priority
        />
      </div>
      <div className="leading-none" id="info">
        <div className="text-xs font-medium text-white *:mr-2 *:rounded-xl [&>*:not(:first-child)]:p-small [&>*:not(:first-child)]:uppercase">
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
        <h2 className="my-1 text-xl font-bold" id="position">
          {position}
        </h2>
        <div className="text-cyan-grayish-dark-1 [&>*:not(:first-child)]:px-4">
          <span className="pr-4" id="postedAt">
            {postedAt}
          </span>
          •<span id="contract">{contract}</span>•
          <span id="location">{location}</span>
        </div>
      </div>
      <div className="ml-auto flex flex-wrap gap-4 font-bold *:rounded-sm *:bg-cyan-grayish-light-2 *:p-small *:text-cyan-desaturated">
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
      </div>
    </motion.div>
  );
};

export default Card;
