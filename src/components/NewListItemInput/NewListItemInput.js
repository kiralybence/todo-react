import './NewListItemInput.css';
import { useState } from 'react';

function NewListItemInput(props) {
    const [draft, setDraft] = useState('');

    function addItem() {
        props.addItem(draft.trim());
        setDraft('');
    }

    return (
        <div>
            <textarea
                rows="8"
                onChange={(e) => setDraft(e.target.value)}
            ></textarea>

            <br />

            <button
                onClick={addItem}
                disabled={!draft.trim().length}
            >Add</button>
        </div>
    );
}

export default NewListItemInput;
