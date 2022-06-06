import './App.css';
import List from '../List/List';
import NewListItemInput from '../NewListItemInput/NewListItemInput';

function App() {
    return (
        <div id="container">
            <h1>TODO app</h1>
            <hr />
            <NewListItemInput className="new-list-item-input" />
            <List />
        </div>
    );
}

export default App;
