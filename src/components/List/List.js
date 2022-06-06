import './List.css';
import ListItem from '../ListItem/ListItem';
import { useSelector } from 'react-redux';
import { selectItems } from './listSlice';

function List() {
    const items = useSelector(selectItems);

    return (
        <ul>
            {items.map(item => {
                return (
                    <ListItem
                        item={item}
                        key={item.id}
                    />
                );
            })}
        </ul>
    );
}

export default List;
