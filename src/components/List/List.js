import './List.css';
import ListItem from '../ListItem/ListItem';

function List(items, removeItem) {
    return (
        <ul>
            {items.map(item => {
                return (
                    <ListItem
                        item={item}
                        removeItem={removeItem}
                    />
                );
            })}
        </ul>
    );
}

export default List;
