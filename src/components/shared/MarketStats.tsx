import { Models } from "appwrite";
import { useNavigate } from "react-router-dom";

type MarketStatsProps = {
  post: Models.Document;
  userId: string;
};

const MarketStats = ({ post }: MarketStatsProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(/message);
  };

  return (
    <div className={`flex justify-between items-center z-20 `}>
      <div className="flex gap-2 mr-5">
        <img
          src=""
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{post.price}</p>
      </div>

      <div className="flex gap-2">
        <button onClick={handleButtonClick}>message</button>
      </div>
    </div>
  );
};

export default MarketStats;