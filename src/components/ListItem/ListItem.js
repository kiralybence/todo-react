import './ListItem.css';
import ListItemEditor from '../ListItemEditor/ListItemEditor';

function ListItem(item, removeItem) {
    let isEditing = false;

    function toggleCompleted() {
        item.completed = !item.completed;
    }

    function toggleEditor() {
        isEditing = !isEditing;
    }

    return (
        <li>
            {!isEditing ? (
                <div>
                    <span
                        className={`item ${item.completed ? 'strikethrough' : ''}`}
                        onClick={toggleCompleted}
                    >
                        {item.description}
                    </span>

                    <button
                        onClick={toggleEditor}
                    >Edit</button>

                    <button
                        onClick={removeItem}
                    >Remove</button>
                </div>
            ) : (
                <ListItemEditor
                    item={item}
                    editSaved={toggleEditor}
                    editCancelled={toggleEditor}
                />
            )}
        </li>
    );
}

export default ListItem;