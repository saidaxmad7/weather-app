import { useEffect, useRef, useState } from "react";
import { searchCities, type CityResult } from "../../services/searchCities";

interface Props {
    onSearch: (city: string) => void;
}

function Search({ onSearch }: Props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [suggestions, setSuggestions] = useState<CityResult[]>([]);
    const [loading, setLoading] = useState(false);

    const wrapperRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (value.trim().length < 2) {
            setSuggestions([]);
            setLoading(false);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                setLoading(true);
                const data = await searchCities(value.trim());
                setSuggestions(data.slice(0, 6));
            } catch {
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                setSuggestions([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (value.trim().length < 3) {
            setError("Please enter at least 3 letters");
            return;
        }

        setError("");
        onSearch(value.trim());
        setSuggestions([]);
    };

    return (
        <section className='search mt-12'>
            <div className='container'>
                <h1 className='text-2xl md:text-5xl text-white text-center font-bold'>
                    How&apos;s the sky looking today?
                </h1>

                <form
                    ref={wrapperRef}
                    onSubmit={handleSubmit}
                    className='mt-8 flex flex-col md:flex-row items-stretch gap-4 max-w-3xl mx-auto relative'
                >
                    <div className='relative w-full md:flex-1'>
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

                        {/* 🔄 LOADING PANEL */}
                        {loading && (
                            <div className='absolute top-full left-0 mt-2 w-full rounded-xl bg-[var(--neutral-700)] px-4 py-3 flex items-center gap-2 text-white text-sm'>
                                <span className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
                                Search in progress
                            </div>
                        )}

                        {/* 📍 AUTOCOMPLETE */}
                        {!loading && suggestions.length > 0 && (
                            <ul className='absolute top-full left-0 z-30 mt-2 w-full rounded-xl bg-[var(--neutral-700)] shadow-lg overflow-hidden'>
                                {suggestions.map((city) => {
                                    const fullName = `${city.name}, ${city.country}`;
                                    return (
                                        <li
                                            key={city.id}
                                            className='px-4 py-2 text-white cursor-pointer hover:bg-white/10'
                                            onClick={() => {
                                                setValue(fullName);
                                                onSearch(fullName);
                                                setSuggestions([]);
                                            }}
                                        >
                                            <span className='font-medium'>
                                                {city.name}
                                            </span>
                                            <span className='text-white/60'>
                                                {city.region
                                                    ? `, ${city.region}`
                                                    : ""}
                                                , {city.country}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {error && (
                            <p className='text-red-400 mt-1 text-xs'>{error}</p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='search-btn w-full md:w-auto shrink-0'
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Search;
