import CardListPropsType from "./card.list.props.type";
import CardSingleComponent from "../../single/card/card.single.component";
import './card.list.style.scss';

const CardListComponent = ({ list, className }: CardListPropsType) => {
    return (
        <div className={className || "card-list"}>
            {
                list.map((item) => {
                    return <CardSingleComponent key={item.id} id={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl}></CardSingleComponent>
                })
            }
        </div>
    )
};

export default CardListComponent;