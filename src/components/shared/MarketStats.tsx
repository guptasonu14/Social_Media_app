import { Models } from "appwrite";
import { useGetCurrentUser } from "@/lib/react-query/queries";


type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const MarketStats = ({ post, userId }: PostStatsProps) => {
  



 

  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save?.find(
    (record: Models.Document) => record.post.$id === post.$id
  );
  

 
return (
    <div
      className={`flex justify-between items-center z-20 `}>
      <div className="flex gap-2 mr-5">
        <img
          src=""
          alt="like"
          width={20}
          height={20}
          
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">price</p>
      </div>

      <div className="flex gap-2">
        <button>message</button>
      </div>
    </div>
  );
};

export default MarketStats;