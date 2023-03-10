import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import TableHeader from '../common/TableHeader';
import { customerRewardsInfo } from '../utils/DataSet';
import Row from './Row';

export type Props = {
    rows: customerRewardsInfo[],
    headers: string[],
    isSubComponentAvailable?: boolean,
    subTableHeader: string,
    subTableLabels: string[]
}

const RewardTable: React.FC<Props> = ({ rows, headers, isSubComponentAvailable, subTableHeader, subTableLabels }) => {

    const filteredRows = rows.filter(elm => elm)
    const flattenedRows = filteredRows.flat()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                    <TableHeader headers={headers} emptyHeader />
                    <TableBody>
                        {flattenedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <>
                                <Row row={row}
                                    isSubComponentAvailable={isSubComponentAvailable}
                                    subTableHeader={subTableHeader}
                                    subTableLabels={subTableLabels} />
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={flattenedRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </>
    );
};

export default React.memo(RewardTable);
