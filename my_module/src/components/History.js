import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// import "./Table.css";
// import './Assignment.css';

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function History() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("600px");
  const [tableBodyWidth, setTableBodyWidth] = useState("900px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  // const [searchBtn, setSearchBtn] = useState(true);
  // const [downloadBtn, setDownloadBtn] = useState(true);
  // const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true} } },
    "Registration ID"
    ,"Installment","Total Fees","Paid Fees","Remaining Fees"
  ];

  const options = {
    // search: searchBtn,
    // download: downloadBtn,
    // print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
      tableBodyWidth,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],

    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],

    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],
    ["Shruti Sewak", "52345", "1" , "31500","10000","21500"],

   
  ];

  return (
    <div id="History">
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
      
        <MUIDataTable
          title={"Student Payment History"}
          data={data}
          columns={columns}
          options={options}
        />
        
      </ThemeProvider>
    </CacheProvider>
    </div>
  );
}



// function App() {
//   return (
//     <>
//       <div>
//       <Table />
//       </div>
//     </>
//   );
// }

export default History