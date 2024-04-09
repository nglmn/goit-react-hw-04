import { useState } from "react"
import useFetch from "./useFetch";



const useGetImages = () => {
  const [search, setSearch] = useState(""); //search
  const [page, setPage] = useState(1);

  const { imageGallery, loading, errorMessage } = useFetch({ search, page });

  const onLoadMore = async () => {
    setPage(page + 1);
  }

  return { search, onLoadMore, setSearch, imageGallery, loading, errorMessage, page }
}

export default useGetImages