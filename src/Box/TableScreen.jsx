import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import Table from "@mui/material/Table";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import React from "react";
import editOutline from "./asset/edit-outline.svg";
import "./style.css";
import user from "./asset/user.svg";

export const TableScreen = () => {
  return (
    <Table color="dark" rules="none" summary="Newsletter Subscribers">
      <div className="frame">
        <Button
          color="primary"
          endIcon={<div>Placeholder element</div>}
          size="medium"
          startIcon={<div>Placeholder element</div>}
          variant="contained"
        >
          Action on selected rows
        </Button>
        <div className="div">
          <Button
            color="primary"
            endIcon={<div>Placeholder element</div>}
            size="medium"
            startIcon={<div>Placeholder element</div>}
            variant="contained"
          >
            Filter by
          </Button>
        </div>
      </div>

      <TableHead>
        <div className="table-columns">
          <div className="column">
            <div className="tables-cell">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="small-checkboxes-wrapper">
              <div className="rectangle-wrapper">
                <div className="rectangle-2" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="small-checkboxes-wrapper">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="div-wrapper">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="div-wrapper">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="div-wrapper">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-3">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />

            <div className="div-wrapper">
              <div className="small-checkboxes">
                <div className="rectangle" />
              </div>
            </div>

            <div className="border-bottom" />
          </div>

          <div className="column-2">
            <div className="text-wrapper">
              <div className="text">USER NAME</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="search">
                <div className="input-field">
                  <div className="input">
                    <div className="content">
                      <img className="user" alt="User" src={user} />

                      <input
                        className="input-text"
                        placeholder="Search"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">Lokesh Yadav</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">Chutki</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">Zoffi Khan</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">Nikita Jain</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">Vidya Shet</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">Vidushi Pal</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-4" />

            <div className="border-bottom" />

            <div className="tables-cell-4" />

            <div className="border-bottom" />

            <div className="tables-cell-4" />

            <div className="border-bottom" />
          </div>

          <div className="column-3">
            <div className="text-wrapper">
              <div className="text">EMAIL ID</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="search">
                <div className="input-field">
                  <div className="input">
                    <div className="content">
                      <img className="user" alt="User" src={user} />

                      <input
                        className="input-text"
                        placeholder="Search"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="text-2">abc@email.com</div>
            </div>

            <div className="border-bottom" />
          </div>

          <div className="column-2">
            <div className="text-wrapper">
              <div className="text">STATUS</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="search">
                <div className="input-field">
                  <div className="input">
                    <div className="content">
                      <img className="user" alt="User" src={user} />

                      <input
                        className="input-text"
                        placeholder="Search"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible
                overlap="rectangular"
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="error"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Inactive
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="error"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Inactive
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible={false}
                overlap="rectangular"
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <Badge
                color="success"
                invisible={false}
                overlap="rectangular"
                showZero={false}
                variant="standard"
              >
                Active
              </Badge>
            </div>

            <div className="border-bottom" />
          </div>

          <div className="column-4">
            <div className="tables-cell-5">
              <div className="text">DETAILS</div>
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <div className="search-wrapper">
                <div className="input-field-wrapper">
                  <div className="input-field-2">
                    <div className="content-wrapper">
                      <div className="content-2">
                        <img className="user" alt="User" src={user} />

                        <input
                          className="input-text-2"
                          placeholder="Search"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-bottom" />

            <div className="edit-outline-wrapper">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="edit-outline-wrapper">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="edit-outline-wrapper">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="tables-cell-2">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom" />

            <div className="edit-outline-wrapper">
              <img
                className="edit-outline"
                alt="Edit outline"
                src={editOutline}
              />
            </div>

            <div className="border-bottom-2" />
          </div>
        </div>
      </TableHead>
      <TableFooter>
        <div className="frame">
          <p className="p">Showing 1 to 09 of 100 Entries</p>

          <Pagination color="standard" disabled={false} variant="text" />
        </div>
      </TableFooter>
    </Table>
  );
};