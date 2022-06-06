import styles from './App.module.css';
import List from '../List/List';
import NewListItemInput from '../NewListItemInput/NewListItemInput';

function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>TODO app</h1>
            <hr className={styles.hr} />
            <NewListItemInput className={styles['new-list-item-input']} />
            <List />
        </div>
    );
}

export default App;
