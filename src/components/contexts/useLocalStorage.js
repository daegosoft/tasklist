import React from "react";
// const categorys = [{text: "Personal"}];
// localStorage.setItem("TASK?CATEGORYS", JSON.stringify(categorys));

function useLocalStorage (solicity, itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(()=>{
        try {
            let localItem = localStorage.getItem(itemName);
            if ( !localItem ) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                localItem = itemName;
            } else {
                localItem = JSON.parse(localItem);
                setItem(localItem);
            }
        } catch (error) {

        }
    }, []);

    return {item};
}

export { useLocalStorage }