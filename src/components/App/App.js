import './App.css';
import List from '../List/List';
import NewListItemInput from '../NewListItemInput/NewListItemInput';

function App() {
    let items = [];

    function getNewId() {
        if (!items.length) {
            return 1;
        }

        let prevHighestId = items.reduce((a, b) => a.id > b.id ? a : b).id;

        return prevHighestId + 1;
    }

    function addItem(draft) {
        items.push({
            id: getNewId(),
            description: draft,
            completed: false,
        });
    }

    function removeItem(id) {
        items = items.filter(item => item.id !== id);
    }

    return (
        <div id="container">
            <h1>TODO app</h1>
            <hr />

            <NewListItemInput
                className="new-list-item-input"
                addItem={addItem}
            />

            <List
                items={items}
                removeItem={removeItem}
            />
        </div>
    );
}

export default App;
