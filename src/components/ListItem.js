import React, { useState } from "react";

const initialListItemsState = [
    {
        id: 1,
        text: "React components, JSX and passing props",
        completed: false,
    },
    {
        id: 2,
        text: "Storing and setting state with useState",
        completed: false,
    },
    {
        id: 3,
        text: "The useEffect hook and making api calls",
        completed: false,
    },
    {
        id: 4,
        text: "Styling React components",
        completed: false,
    },
    {
        id: 5,
        text: "React Router",
        completed: false,
    },
];

// // What are we doing with this code
// // {...item, completed: !item.completed}

// item = {
//     id: 1,
//     text: "React components, JSX and passing props",
//     completed: false,
// }

// {...item, completed: true} 

//  =
//     {
//     id: 1,
//     text: "React components, JSX and passing props",
//     completed: true
//     }




const ListItem = () => {

    const [listItems, setListItems] = useState(initialListItemsState)

    const handleClick = (id) => {
        const newListItems = listItems.map((item) => (
            item.id === id ? { ...item, completed: !item.completed } : item
        ))

        setListItems(newListItems)

    };


    return (
        <div>
            {listItems.map((listItem) => (
                <div>
                    <p>{listItem.text}</p>
                    <span>Completed: {listItem.completed ? "Yes!" : "No!"}</span>
                    <button onClick={() => handleClick(listItem.id)}>Toggle</button>
                </div>

            ))}
        </div>
    )
}

export default ListItem;