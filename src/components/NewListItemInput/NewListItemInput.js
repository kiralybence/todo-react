import './NewListItemInput.css';

function NewListItemInput(addItem) {
    let draft = '';

    // TODO: find a better naming convention (maybe props should have the emit prefix)
    function emitAddItem() {
        addItem(draft.trim());
        draft = '';
    }

    return (
        <div>
            <textarea
                rows="8"
                onChange={(e) => draft = e.target.value}
            ></textarea>

            <br />

            <button
                onClick={emitAddItem}
                disabled={!draft.trim().length}
            >Add</button>
        </div>
    );
}

export default NewListItemInput;
