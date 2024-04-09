import toast, { Toaster } from 'react-hot-toast';

import css from "./SearchBar.module.css";

const SearchBar = ({ setSearch }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        let query = e.target.elements.userQuery.value;
        query = query.trim();
        if (query === "") return toast.error('Write something for searching...');
        setSearch(query);
    }

    return (
        <header className={css.header}>
            <form onSubmit={onSubmit} className={css.form}>
                <input
                    type="text"
                    name="userQuery"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.input}
                />
                <button type="submit" className={css.submitBtn}>Search</button>
            </form >
            <Toaster />
        </header >
    )
}

export default SearchBar