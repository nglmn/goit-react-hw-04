import axios from "axios";
import { useState, useEffect } from "react";

const userKey = import.meta.env.VITE_ACCESS_KEY;

const useFetch = () => {
    const [images, setImages] = useState({
        results: [],
        total_pages: 0,
        total: 0
    });
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [showMoreBtn, setShowMoreBtn] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        if (!search) return;
        async function getData() {
            try {
                setErrorMessage(false);
                setShowMoreBtn(false);
                setLoading(true);
                const params = {
                    params: {
                        query: search,
                        page: currentPage,
                        per_page: 5
                    },
                    headers: {
                        Authorization: `Client-ID ${userKey}`
                    }
                };
                const response = await axios.get(`https://api.unsplash.com/search/photos`, params);
                if (response.data.total === 0) {
                    return setErrorMessage(true);
                }
                if (response.data.total_pages > currentPage) {
                    setImages((prevState) => {
                        return {
                            results: [...prevState.results, ...response.data.results],
                            total_pages: response.data.total_pages,
                            total: response.data.total
                        };
                    })
                    setShowMoreBtn(true);
                }
            } catch (error) {
                setErrorMessage(true);

            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [search, currentPage])

    useEffect(() => {
        setCurrentPage(1);
        setImages({
            results: [],
            total_pages: 0,
            total: 0
        });
    }, [search]);

    return { images, setSearch, loading, showMoreBtn, errorMessage, setCurrentPage, currentPage }
}

export default useFetch