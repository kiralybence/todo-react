import './ListItemEditor.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsEditing, updateItem } from '../List/listSlice';

function ListItemEditor(props) {
    const [draft, setDraft] = useState(props.item.description);
    const dispatch = useDispatch();

    function save() {
        dispatch(updateItem({ id: props.item.id, description: draft.trim() }));
        dispatch(toggleIsEditing(props.item.id));
    }

    function cancel() {
        setDraft(props.item.description);
        dispatch(toggleIsEditing(props.item.id));
    }

    return (
        <div>
            <input
                type="text"
                onChange={e => setDraft(e.target.value)}
                value={draft.toString()}
            />

            <button
                onClick={save}
                disabled={!draft.trim().length}
            >Save</button>

            <button
                onClick={cancel}
            >Cancel</button>
        </div>
    );
}

export default ListItemEditor;
