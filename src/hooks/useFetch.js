import axios from "axios";
import { useState, useEffect, useRef } from "react";

const userKey = 'IoY6wkOsCIhtcv7XxE5c1pqtUYGp1MBDXMNQcDBZHMU';

const useFetch = ({ userQuery, page }) => {
    const [imageGallery, setImageGallery] = useState({
        data: [],
        total: 0,
        total_pages: 0
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const refSearch = useRef(userQuery); //сохраняем предидущее состояние 

    useEffect(() => {
        if (!userQuery.length) return;
        async function getPicturesFromAPI() {
            try {
                setLoading(true);
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&per_page=2&query=${userQuery}&client_id=${userKey}`);

                if (refSearch.current !== userQuery) {//если поменялся search
                    setImageGallery({
                        data: data.results,
                        total: data.total,
                        total_pages: data.total_pages
                    });
                    refSearch.current = userQuery;
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
    }, [userQuery, page]);

    return { imageGallery, loading, errorMessage }
}

export default useFetch