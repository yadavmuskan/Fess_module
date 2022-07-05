import * as React from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from 'react-table';
import './table.css'
import { TableCheckbox } from './TableCheckbox';
import arrows from '../Table/directional-arrows.png';
import up from '../Table/up-arrow.png';
import down from '../Table/down-arrow.png'
// import logo from '../Table/logo.jpeg'
// import NoDataFound from '../Table/logo.jpeg';
// import { useNavigate } from 'react-router-dom';

import dumdata from './data/MOCK_DATA.json'

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      <input style={{ width: "40vh", height: "50px", outline: "none", border: "1px solid #7979792b", padding: "5px", borderRadius: "8px", paddingLeft: '12px', fontSize: '1.5em' }} type="search" value={filter || ''} onChange={(e) => setFilter(e.target.value)} placeholder='Search..' />
      <i style={{ marginLeft: "-29px", marginTop:'10px',color: "rgb(90, 96, 127,0.7)" }} className="fas fa-search" ></i>

    </>
  )
}

function Table2() {
  // const navigate = useNavigate()


  const [columns] = React.useState([
    {
      header: "S.No",
      accessor: "Srno",
      Cell: ({ row: { original, index } }) => {
        return (index + 1)
      }
    },
    {
      header: 'Name',
      accessor: 'first_name'
    },
    {
      header: 'Email ID',
      accessor: 'email'
    },
    {
      header: 'Class',
      accessor: 'class'
    },
    {
      header: 'Totel Fees',
      accessor: 'total_fees'
    },
    {
      header: 'Deposite',
      accessor: 'deposite'
    },
    {
      header: 'Due',
      accessor: 'due'
    },




    // {
    //   header: 'Role',
    //   accessor: '',
    //   Cell: ({ row: { original } }) => {
    //     var data2 = original.role.charAt(0).toUpperCase() + original.role.slice(1).toLowerCase();
    //     data2 = data2.replace('admin', ' Admin');
    //     return (data2)
    //   }
    // },
    {
      header: 'Status',
      accessor: 'status',
      Cell: ({ row: { original } }) => (

        <button style={{ height: '1.7em', width: '5em', borderRadius: '5px', color: 'white', backgroundColor: ' #3b5998', textAlign: 'center', borderColor: 'transparent' }}>
          {
            original.status ? "Active" : "Deactive"
          }
        </button>
      )
    },
    // {
    //   header: 'delete',
    //   accessor: 'delete',
    //   Cell: ({ row: { original } }) => (

    //     <button style={{ height: '1.7em', width: '5em', borderRadius: '5px', color: 'white', backgroundColor: ' #3b5998', textAlign: 'center', borderColor: 'transparent' }}>
    //       delete
    //     </button>
    //   )
    // }
  ])
  // const data = useMemo(() => MockData, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    setGlobalFilter,
    page,
    // nextPage,
    // previousPage,
    // canNextPage,
    // rows,
    // canPreviousPage,
    // pageOptions,
    // gotoPage,
    // pageCount,
    setPageSize,
    selectedFlatRows,
    prepareRow,
  } = useTable({
    columns,
    data: dumdata,
  },

    useGlobalFilter, useSortBy,
    usePagination, useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            header: ({ getToggleAllRowsSelectedProps }) => (
              <TableCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <TableCheckbox {...row.getToggleRowSelectedProps()} />
            )
          },
          ...columns
        ]
      })
    }
  )

  const { globalFilter } = state
  const { pageIndex, pageSize } = state
  console.log(pageIndex);

  const checkboxData = JSON.stringify(
    selectedFlatRows.map(
      d => d.original
    ),
  );
  console.log(checkboxData);
  // Taking the data from the checkbox 
  // console.log("Here", checkboxData);


  return (
    <>
      <div style={{ backgroundColor: "#F4F7FC", height: "100vh", width: "100wh" }}>
        <div style={{ position: 'sticky', top: '80px', width: '100%', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#f4f7fc', zIndex: '5' }}>
          <div className="d-flex">
            <div className='' style={{ fontsize: '2em', borderRadius: '8px', boxShadow: 'none', margin: '5px' }}>
              <select className="form-select table_select_row_options" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                  [10, 25, 50, 100].map(pageSize => (
                    <option option value={pageSize} key={pageSize}>Show Entrie{pageSize} </option>
                  ))
                }
              </select>
            </div>
            <div className='d-flex ml-auto me-1'>
              {/* <button className='btn btn-primary mr-2'>Active</button> */}
              <div className='ml-auto me-4'>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
              </div>
            </div>
          </div>

        </div>
        <table {...getTableProps()} id="customers" className="table table-sm" >
          <thead style={{ position: 'sticky', top: '135px', width: '100%', backgroundColor: '#f4f7fc', zIndex: '5', fontSize: '1.9em', color: '#3b5998' }}>
            {
              headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column) => (
                      <th  {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('header')}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <img src={up} style={{  height: "20px", width: "20px", borderRadius: "30px", margin: "10px",marginLeft:'20px' }}
                              alt="..."
                            />
                            ) : (
                              <img src={down} style={{  height: "20px", width: "20px", borderRadius: "30px", margin: "10px",marginLeft:'20px' }}
                              alt="..."
                            />
                              // <img src={updown_sort} style={{ marginLeft: "5px" }} alt="" />
                              
                            )
                          ) : (

                            column.id !== 'Srno' && column.id !== 'selection' &&
                            <img src={arrows} style={{  height: "20px", width: "20px", borderRadius: "30px", margin: "10px",marginLeft:'20px' }}
            alt="..."
          />
     

                          )}
                        </span></th>
                    ))
                  }

                </tr>
              ))
            }
          </thead>
          <tbody  {...getTableBodyProps()}>
            {
              page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map(cell => {
                        return (

                          <td
                            style={{
                              fontSize: '1.9em'
                            }}
                            {...cell.getCellProps()}>{cell.render('Cell')} </td>

                        )
                      })
                    }

                  </tr>
                )
              })
            }


          </tbody>
        </table>
        {/* <NoDataFound rows={rows} /> */}
        {/* <Pagination
            data={table_data.table_data}
            rows={rows}
            page={page}
            pageIndex={pageIndex}
            pageCount={pageCount}
            pageSize={pageSize}
            canPreviousPage={canPreviousPage}
            previousPage={previousPage}
            pageOptions={pageOptions}
            gotoPage={gotoPage}
            canNextPage={canNextPage}
            nextPage={nextPage}
          /> */}
      </div>
    </>
  );
}



export default Table2;

