import ItemList from "../Routers/ItemsList"

const RestaurantCatogary = ({data, showItem, setShowIndex})=>{
    const clickHandler = ()=>{
      setShowIndex()
    }
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            {/* Header */}
              <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
              </div>
            {/* Accordion Body */}
            {showItem && <ItemList Items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCatogary