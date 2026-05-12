<button
 disabled={itemExists}
 onClick={() => dispatch(addItem(plant))}
>
 {itemExists ? "Added to Cart" : "Add to Cart"}
</button>

