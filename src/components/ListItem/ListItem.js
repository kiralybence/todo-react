import './ListItem.css';
import ListItemEditor from '../ListItemEditor/ListItemEditor';
import { useState } from 'react';

function ListItem(props) {
    const [isEditing, setIsEditing] = useState(false);

    function toggleCompleted() {
        props.item.completed = !props.item.completed;
    }

    function toggleEditor() {
        setIsEditing(!isEditing);
    }

    return (
        <li>
            {!isEditing ? (
                <div>
                    <span
                        className={`item ${props.item.completed ? 'strikethrough' : ''}`}
                        onClick={toggleCompleted}
                    >
                        {props.item.description}
                    </span>

                    <button
                        onClick={toggleEditor}
                    >Edit</button>

                    <button
                        onClick={props.removeItem}
                    >Remove</button>
                </div>
            ) : (
                <ListItemEditor
                    item={props.item}
                    editSaved={toggleEditor}
                    editCancelled={toggleEditor}
                />
            )}
        </li>
    );
}

export default ListItem;