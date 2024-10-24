
import "./listItem.css"

function ListItem( { text, deleteItem } ){
    return(
        <div className="Item">
            <p> {text} </p>
            <button className="delete" onClick={deleteItem}>Deletar</button>
        </div>
    )
}

export default ListItem




