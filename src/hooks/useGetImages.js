import { useState } from "react"
import useFetch from "./useFetch";



const useGetImages = () => {

  const [userQuery, setUserQuery] = useState(""); //search
  const [page, setPage] = useState(1);

  const { imageGallery, loading, errorMessage } = useFetch({ userQuery, page });

  const onLoadMore = async () => {
    setPage(page + 1);
  }

  return { userQuery, onLoadMore, setUserQuery, imageGallery, loading, errorMessage, page }
}

export default useGetImages