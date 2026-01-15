
function Search() {
    return (
        <section className='search mt-12'>
            <div className='container'>
                <h1 className='text-5xl text-white text-center font-bold'>
                    How's the sky looking today?
                </h1>
                <form className='search-form mt-12'>
                    <div className='search-input flex gap-2'>
                        <div className='search-img'>
                            <img src='/icon-search.svg' alt=' icon search' />
                        </div>
                        <input type='text' placeholder="Search for a place..." />
                    </div>
                    <button className='search-btn'>Search</button>
                </form>
            </div>
        </section>
    );
}

export default Search;
