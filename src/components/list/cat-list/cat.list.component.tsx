import CatType from "../../../type/single/cat.single.type";
import CatListPropsType from "./cat.list.props.type";
import CardPropsType from "../../single/card/card.single.props.type";
import CardListComponent from "../card-list/card.list.component";

const CatListComponent = ({ list }: CatListPropsType) => {
    const convertToCardList = (items: CatType[]): Array<CardPropsType> => {
        return items.map((item) => {
            return {
                id: item.id,
                title: item.name,
                description: `${item.price.toFixed(2).toString()}$`,
                imageUrl: `https://robohash.org/${item.name}_${item.id}.png?set=set4`
            } as CardPropsType
        }) as Array<CardPropsType>;
    };

    const cardList = convertToCardList(list);

    return (
        <CardListComponent list={cardList}></CardListComponent>
    )
};

export default CatListComponent;