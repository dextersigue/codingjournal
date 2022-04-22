import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/style.css"

const EntryList = (props) => {

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell className="color"> Thougths for the Day </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.entry.map((entry) => (
              <TableRow  
                key={entry.id}
              >
                <div className="bgcolor">
                  <div align="left">Date: {entry.date}</div>
                  <div align="left">{entry.msg} </div>
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EntryList;
