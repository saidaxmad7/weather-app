import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

function Search({ onSearch }: Props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (value.trim().length < 3) {
            setError("Please enter at least 3 letters");
            return;
        }

        setError("");
        onSearch(value.trim());
    };

    return (
        <section className='search mt-12'>
            <div className='container'>
                <h1 className='text-5xl text-white text-center font-bold'>
                    How&apos;s the sky looking today?
                </h1>

                <form className='search-form mt-12' onSubmit={handleSubmit}>
                    <div
                        className={`search-input flex gap-2 ${
                            error ? "border border-red-500" : ""
                        }`}
                    >
                        <img src='/icon-search.svg' alt='search' />
                        <input
                            type='text'
                            placeholder='Search for a place...'
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                setError("");
                            }}
                        />
                    </div>

                    {error && (
                        <p className='text-red-400 mt-1 text-xs'>{error}</p>
                    )}

                    <button className='search-btn'>Search</button>
                </form>
            </div>
        </section>
    );
}

export default Search;
