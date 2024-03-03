import { Models } from "appwrite";


type MarketStatsProps = {
  post: Models.Document;
  userId: string;
};

const MarketStats = ({ post }: MarketStatsProps) => {
  
 

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
        <button >message</button>
      </div>
    </div>
  );
};

export default MarketStats;