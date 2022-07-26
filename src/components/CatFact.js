import React, { useEffect, useState } from "react";
import axios from "axios"

const CatFact = () => {
    const [catFact, setCatFact] = useState("");

    useEffect(() => {
        axios.get("https://catfact.ninja/fact?max_length=140").then(result => setCatFact(result.data.fact))
    }, [])

    return (
        <div>
            <p>Here's a random cat fact</p>
            <p>{catFact}</p>
        </div>
    )
}

export default CatFact;