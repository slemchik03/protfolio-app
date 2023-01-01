import { FC } from "react";

interface Props {
  title: string;
  text?: string;
}

const LoadError: FC<Props> = ({ title, text }) => {
  return (
    <div className="grid justify-center items-center text-center">
      <h3 className="text-[32px] py-[100px] max-w-[700px]">{title}</h3>
      {text && <p>{text}</p>}
    </div>
  );
};

export default LoadError;
