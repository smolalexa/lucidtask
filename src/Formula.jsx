import { useEffect, useState } from "react";

const Formula = () => {
    const [categories, setCategories] = useState([]);
    const [categoryValue, setCategoryValue] = useState('');
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

    const hideCategories = () => {
        setCategories([]);
    }

    // const getCategoryValue = (categoryValue) => {
    //     // alert(categoryValue);
    //     console.log(categoryValue);
    //     setCategoryValue(categoryValue);
    //     console.log(categoryValue);

    //     // setCategories([]);
    // }


    // return (
    //     <div className="formula-container">
    //         <input onFocus={getCategories} className="formula-container" style={{ width: '50%', padding: '1rem', minHeight: '2rem', border: '1px solid white' }} />
    //         {
    //             categories && (
    //                 <ul className="formula-categories-list">
    //                     {categories.map((c, i) => <li key={i}>{c.name}</li>)}
    //                 </ul>
    //             )
    //         }
    //     </div>
    // )

    return (
        <div>
            <h3>Click in the box below to make calculations using hybrid input field</h3>
            <span className="formula-equal-sign">=</span>
            <div contentEditable onBlur={hideCategories} className="formula-container" onFocus={getCategories} style={{ width: '50%', padding: '1rem', minHeight: '2rem', border: '1px solid white' }}>
                {/* <span className="formula-equal-sign">=</span> */}

                {/* <input onFocus={getCategories} className="formula-container" style={{ width: '50%', padding: '1rem', minHeight: '2rem', border: '1px solid white' }} /> */}
                {/* {
                    categories && (
                        <ul className="formula-categories-list" contentEditable="false">
                            {categories.map((c, i) => <li onClick={getCategoryValue(c.value)} 
                             className="formula-list-item" key={i}>{c.name}</li>)}
                        </ul>
                    )
                } */}
                {
                    categories && (
                        <ul className="formula-categories-list" contentEditable="false">
                            {categories.map((c, i) => <li 
                             className="formula-list-item" key={i}>{c.name}</li>)}
                        </ul>
                    )
                }
            </div>
        </div>

    )
}

export default Formula