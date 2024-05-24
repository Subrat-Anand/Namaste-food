import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

const ItemList = ({Items}) => {

    const dispatch = useDispatch()

    const handleAddItem = (Items)=>{
        //despatch and action
        dispatch(addItem(Items))
    }

    // console.log(Items);
    return (
        <div>
            {Items.map((Item) => (
                <div key={Item.card.info.id} className="p-2 m-2 border-b-4 flex justify-between items-center">
                    <div className="font-bold text-left">
                        <div>{Item.card.info.name}</div>
                        <div>&#8377;{Item.card.info.price/100}</div>
                    </div>
                    <div className="bg-black p-3 rounded-lg text-white font-bold"
                    onClick={()=> handleAddItem(Item)}>
                        Add +
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
