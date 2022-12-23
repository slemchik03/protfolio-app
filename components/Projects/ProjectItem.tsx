import Image from "next/image";
import { FC } from "react";

interface Props {
  img: string;
  name: string;
  category: string;
}

const ProjectItem: FC<Props> = ({ img, name, category }) => {
  return (
    <div className="relative max-w-[500px] cursor-pointer hover:scale-110 group shadow-xl rounded-3xl duration-150">
      <Image className="rounded-3xl" width={500} height={300} src={img} alt="project img" />
      <div className="absolute top-0 left-0 grid items-center opacity-0 min-w-full min-h-full group-hover:opacity-100 group-hover:bg-gray-400 group-hover:bg-opacity-70 rounded-3xl">
        <div className="grid grid-flow-row gap-5 justify-center text-center">
          <p className="text-xl md:text-2xl text-white font-bold">{name}</p>
          <p className="text-sm md:text-[16px] text-white font-semibold">{category}</p>
          <button
            type="button"
            className="text-white bg-gray-600 hover:bg-gray-700  font-semibold rounded-lg text-sm md:text-[19px] px-2.5 py-1 md:px-5 md:py-2.5 mr-2 mb-2"
          >
            Go to website!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
