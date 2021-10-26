import { useState } from "react";
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["samurai x"])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((el) =>
                    (<GifGrid key={el} category={el} />)
                )}
            </ol>
        </>
    );
}

export default GifExpertApp;