import Image from "next/image";

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
  isFeatured,
}) => {
  return (
    <div
      className="relative flex items-center rounded-md px-10 py-8 shadow-lg"
      id={id}
    >
      <span className="absolute left-0 block h-full w-1 rounded-l-md bg-cyan-desaturated" />
      <div className="pr-5" id="logo">
        <Image src={logo} height={55} width={80} alt="Logo" />
      </div>
      <div id="info">
        <div className="[&>*:not(:first-child)]:p-small text-xs font-medium text-white *:mr-2 *:rounded-xl [&>*:not(:first-child)]:uppercase">
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
            className={`bg-cyan-grayish-dark-2 ${!isFeatured ? "hidden" : undefined}`}
            id="featured"
          >
            Featured
          </span>
        </div>
        <h2 className="text-xl font-bold" id="position">
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
      <div className="*:bg-cyan-grayish-light-2 *:p-small ml-auto flex flex-wrap gap-4 font-bold *:rounded-sm *:text-cyan-desaturated">
        {languages?.map((language, _) => {
          return <span key={language}>{language}</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
