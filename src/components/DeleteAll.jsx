

import "./deleteAll.css"

function DeleteAll({ onClick }){
    return (
        <div className="deleteAll" onClick={onClick}>
            <button>Deletar todos</button>
        </div>
    )
}

export default DeleteAll