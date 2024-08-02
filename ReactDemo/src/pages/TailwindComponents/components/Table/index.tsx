interface ITableProps {
    columns: string[];
    rows: any[];
}

const Table = ({ columns, rows }:ITableProps) => {

    return(
        <table className="table-auto w-full">
            <thead className="bg-gray-300 border-solid border-black border-2">
                {columns.map((column, i) => (
                    <th key={i} className="p-2 text-lg">{ column }</th>
                ))}
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-solid border-black border-2 hover:bg-gray-200">
                        {columns.map((column, j) => (
                            <td key={j} className="text-center p-2">{ row[column] || "" }</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table