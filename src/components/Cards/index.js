import react from "react";
import { Card } from "primereact/card";
import { TaskContext } from '../contexts';
import './cardsCategory.css';

function CardsCategory ({children}) {
    const {categorys} = react.useContext(TaskContext);
    console.log(categorys);
    return (
        <div className="cards">
            { categorys.map((col, i) => (
            <Card title={col.text}>
                {children}
            </Card>
            ))}
        </div>
    );
}

export { CardsCategory };