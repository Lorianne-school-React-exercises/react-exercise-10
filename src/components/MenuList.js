import React from "react"
import MenuItem from "./MenuItem"

function MenuList({ foodItems }) {
  return (
    <div>
      {/*render a MenuItem component to each element of the props array*/}
      {foodItems.map((item, index) => (
        <MenuItem
          itemInfo={item}
          key={index}
          name={item.itemName}
          description={item.description}
          image={item.foodImage}
          price={item.price}
          favorite={item.isFavorite}
        />
      ))}
    </div>
  )
}

export default MenuList
