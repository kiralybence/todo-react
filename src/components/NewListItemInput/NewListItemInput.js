import './NewListItemInput.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../List/listSlice';

function NewListItemInput() {
    const [draft, setDraft] = useState('');
    const dispatch = useDispatch();

    function submit() {
        dispatch(addItem(draft.trim()));
        setDraft('');
    }

    return (
        <div>
            <textarea
                rows="8"
                onChange={e => setDraft(e.target.value)}
                value={draft}
            />

            <br />

            <button
                onClick={submit}
                disabled={!draft.trim().length}
            >Add</button>
        </div>
    );
}

export default NewListItemInput;
