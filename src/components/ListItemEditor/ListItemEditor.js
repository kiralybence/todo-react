import './ListItemEditor.css';

function ListItemEditor(item, editSaved, editCancelled) {
    let draft = item.description;

    function save() {
        item.description = draft.trim();
        editSaved();
    }

    function cancel() {
        draft = item.description;
        editCancelled();
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) => draft = e.target.value}
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
