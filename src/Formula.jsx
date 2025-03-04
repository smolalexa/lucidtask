import { useEffect, useState } from "react";

const Formula = () => {
    const [categories, setCategories] = useState([]);
    // const [categoriesHTML, setCategoriesHTML] = useState('');
    const url = `https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`;

    // useEffect(() => {
    //     const getCategories = async () => {
    //         try {
    //             const res = await fetch(url);

    //             const data = await res.json();
    //             console.log(data);

    //             setCategories(data);
    //             console.log(categories);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     getCategories();
    // }, [])

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setCategories(data))
    // }, [])

    console.log(categories);

    // const createCategoriesHTML = () => {
    //     let tv = '';
    //     categories.map(c => {
    //         tv += `<li>${c.name}</li>`;
    //         // tv = 'test';
    //     })
    //     setCategoriesHTML(tv);
    // }

    // console.log(categoriesHTML);

    const getCategories = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCategories(data))
    }


    return (
        <div className="formula-container">
            <input onFocus={getCategories} className="formula-container" style={{ width: '50%', padding: '1rem', minHeight: '2rem', border: '1px solid white' }} />
            {/* {categoriesHTML} */}
            {
                categories && (
                    <ul className="formula-categories-list">
                        {categories.map((c, i) => <li key={i}>{c.name}</li>)}
                    </ul>
                )
            }
        </div>
    )
}

export default Formula