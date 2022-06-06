import styles from './ListItem.module.css';
import ListItemEditor from '../ListItemEditor/ListItemEditor';
import { useDispatch } from 'react-redux';
import { removeItem, toggleCompleted, toggleIsEditing } from '../List/listSlice';

function ListItem(props) {
    const dispatch = useDispatch();

    return (
        <li>
            {!props.item.isEditing ? (
                <div>
                    <span
                        className={`${styles.item} ${props.item.completed ? styles.strikethrough : ''}`}
                        onClick={() => dispatch(toggleCompleted(props.item.id))}
                    >
                        {props.item.description}
                    </span>

                    <button
                        className={styles.button}
                        onClick={() => dispatch(toggleIsEditing(props.item.id))}
                    >Edit</button>

                    <button
                        className={styles.button}
                        onClick={() => dispatch(removeItem(props.item.id))}
                    >Remove</button>
                </div>
            ) : (
                <ListItemEditor item={props.item} />
            )}
        </li>
    );
}

export default ListItem;