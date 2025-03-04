import { useState } from "react"

const Test = () => {
    const [date, setDate] = useState(new Date().toLocaleString());

    return (
        <>
            <h2>Today is {date}</h2>
        </>
    )
}

export default Test