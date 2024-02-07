import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const values = [
    {check: false, description:"Cortar cebolla", datestart: "2024-01-31"},
    {check: true, description:"Cortando cebolla", datestart: "2024-01-31"}
];
const columns = [
    {field: "check", header: "Check"},
    {field: "description", header: "Descripción"},
    {field: "datestart", header: "Fecha Inicio"},
    {field: "dateend", header: "Fecha Fin"},
    {field: "delete", header: "Eliminar"}
];
function TableData () {
    return (
        <DataTable value={values} tableStyle={{width: '100%'}} header="Listado de tareas">
            {columns.map((col, i) => (
                <Column key={i} field={col.field} header={col.header} />
            ))}
        </DataTable>
    );
}

export { TableData };