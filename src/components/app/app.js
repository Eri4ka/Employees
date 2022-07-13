import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const data = [
        { name: 'John', surname: 'Smith', salary: 500, increase: true, id: 1 },
        { name: 'Michael', surname: 'Loth', salary: 700, increase: false, id: 2 },
        { name: 'Conor', surname: 'McGregor', salary: 1500, increase: true, id: 3 }
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    )
}

export default App;