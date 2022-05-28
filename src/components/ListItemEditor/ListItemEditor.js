import './ListItemEditor.css';
import { useState } from 'react';

function ListItemEditor(props) {
    const [draft, setDraft] = useState(props.item.description);

    function save() {
        props.item.description = draft.trim();
        props.editSaved();
    }

    function cancel() {
        setDraft(props.item.description);
        props.editCancelled();
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setDraft(e.target.value)}
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
