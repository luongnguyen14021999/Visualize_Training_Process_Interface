import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';
import List from './components/dropdown-list/List';

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                Visualize Training Process
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
            <List />
        </div>
    );
}

export default App;
