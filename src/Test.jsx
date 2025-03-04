import { useState } from "react"

const Test = () => {
    const [date, setDate] = useState(new Date().toLocaleString());

    return (
        <>
            <h2>Today is {date}</h2>
            <h3>Click in the box below to fetch categories</h3>
        </>
    )
}

export default Test