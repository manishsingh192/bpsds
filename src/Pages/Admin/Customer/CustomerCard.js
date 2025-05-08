import React, { useState, useMemo } from 'react';
import {
  Box, Card, CardContent, Typography, TextField, InputAdornment, IconButton, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination, TableRow, TableSortLabel, Button
} from '@mui/material';
import {
  Search as SearchIcon, Edit as EditIcon,
  Delete as DeleteIcon, MoreVert as MoreVertIcon, Add as AddIcon, Visibility as VisibilityIcon,
  CheckCircle as CheckCircleIcon, Block as BlockIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const customerHeadCells = [
  { id: 'index', label: 'S. No', sortable: false },
  { id: 'name', label: 'Name', sortable: true },
  { id: 'contact', label: 'Contact', sortable: false },
  { id: 'actions', label: 'Actions', sortable: false },
];

const customerData = [
  { id: 1, name: 'Michael Scott', contact: '1122334455', blacklisted: false },
  { id: 2, name: 'Pam Beesly', contact: '2233445566', blacklisted: true },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilized = array.map((el, index) => [el, index]);
  stabilized.sort((a, b) => {
    const cmp = comparator(a[0], b[0]);
    return cmp !== 0 ? cmp : a[1] - b[1];
  });
  return stabilized.map((el) => el[0]);
}

const CustomerCard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleAdd = () => navigate('/customerform');
  const handleView = (customer) => navigate('/customerview', { state: { customer } });
  const handleEdit = (customerId) => navigate(`/customeredit/${customerId}`);
  const handleDelete = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      console.log(`Deleted customer: ${customerId}`);
    }
  };

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredCustomers = useMemo(() =>
    customerData.filter(row =>
      row.name.toLowerCase().includes(searchTerm)
    ), [searchTerm]);

  const sortedCustomers = useMemo(() =>
    stableSort(filteredCustomers, getComparator(order, orderBy)),
    [filteredCustomers, order, orderBy]
  );

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - filteredCustomers.length);

  const activeCount = customerData.filter(c => !c.blacklisted).length;
  const blacklistedCount = customerData.filter(c => c.blacklisted).length;

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={600}>Manage Customers</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAdd}
          sx={{
            textTransform: 'none',
            padding: '6px 20px',
            backgroundColor: '#0155a5',
            '&:hover': { backgroundColor: '#013f71' },
          }}
        >
          Add Customer
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, maxWidth: 800, mx: 'auto', mb: 4 }}>
        <Card sx={{ flex: 1, backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', p: 2 }}>
          <CheckCircleIcon sx={{ fontSize: 40, color: 'success.main', mr: 2 }} />
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h4" color="success.main">{activeCount}</Typography>
            <Typography>Active Customers</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, backgroundColor: '#fbe9e7', display: 'flex', alignItems: 'center', p: 2 }}>
          <BlockIcon sx={{ fontSize: 40, color: 'error.main', mr: 2 }} />
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h4" color="error.main">{blacklistedCount}</Typography>
            <Typography>Blacklisted Customers</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: '300px' }}
        />
      </Box>

      <Typography variant="h6" sx={{ mb: 1 }}>Customer List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1565c0' }}>
            <TableRow>
              {customerHeadCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sx={{ fontWeight: 'bold', color: '#fff' }}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  {headCell.sortable ? (
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={() => handleRequestSort(headCell.id)}
                      sx={{ color: '#fff' }}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  ) : (
                    headCell.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.id} hover>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton
                        color="primary"
                        onClick={() => handleView(row)}
                        title="View"
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(row.id)}
                        title="Edit"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(row.id)}
                        title="Delete"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                      <IconButton title="More options">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            {sortedCustomers.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">No customers found</TableCell>
              </TableRow>
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredCustomers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default CustomerCard;
