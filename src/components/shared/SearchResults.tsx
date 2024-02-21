import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';


type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}


  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
}

export default SearchResults;
