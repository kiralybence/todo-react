import './List.css';
import ListItem from '../ListItem/ListItem';

function List(props) {
    return (
        <ul>
            {props.items.map(item => {
                return (
                    <ListItem
                        item={item}
                        removeItem={props.removeItem}
                    />
                );
            })}
        </ul>
    );
}

export default List;
