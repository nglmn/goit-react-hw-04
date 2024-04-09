import axios from "axios";
import { useState, useEffect, useRef } from "react";

const userKey = import.meta.env.VITE_ACCESS_KEY;

const useFetch = ({ search, page }) => {
    const [imageGallery, setImageGallery] = useState({
        data: [],
        total: 0,
        total_pages: 0
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const refSearch = useRef(search); //сохраняем предидущее состояние 

    useEffect(() => {
        if (!search.length) return;
        async function getPicturesFromAPI() {
            try {
                setLoading(true);
                const config = {
                    params: {
                        page: page,
                        query: search,
                        per_page: 20
                    },
                    headers: {
                        Authorization: `Client-ID ${userKey}`
                    }
                }
                const { data } = await axios.get(`https://api.unsplash.com/search/photos`, config);
                if (!data.total) {
                    setErrorMessage(true);
                } else {
                    setErrorMessage(false);
                }

                if (refSearch.current !== search) {//если поменялся search
                    setImageGallery({
                        data: data.results,
                        total: data.total,
                        total_pages: data.total_pages
                    });
                    refSearch.current = search;
                } else {//если поменялся пейдж
                    setImageGallery(prevState => ({
                        data: [...prevState.data, ...data.results],
                        total: data.total,
                        total_pages: data.total_pages
                    }));
                }

            } catch (error) {
                setErrorMessage(true);
            } finally {
                setLoading(false);
            }
        }
        getPicturesFromAPI();
    }, [search, page]);

    return { imageGallery, loading, errorMessage }
}

export default useFetch