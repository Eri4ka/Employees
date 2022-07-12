import EmployessListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployessListItem/>
            <EmployessListItem/>
            <EmployessListItem/>
        </ul>
    )
}

export default EmployeesList;