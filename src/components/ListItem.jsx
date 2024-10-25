
import "./listItem.css"

function ListItem( { text, deleteItem, hasComplete, complete} ){
    return(
        <div className={`Item ${ complete ? 'complete' : ''}`} onClick={hasComplete}>
            <p> {text} </p>
            <button className="delete" onClick={deleteItem}  disabled={ complete }>Deletar</button>
        </div>
    )
}

export default ListItem




