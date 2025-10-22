// src/pages/ViewAccounts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  CircularProgress,
  Button,
  Stack,
} from "@mui/material";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const ViewAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all accounts
  const fetchAccounts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/all-account");
      setAccounts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setLoading(false);
    }
  };

  // Delete account
  const handleDelete = async (account_number) => {
    toast.info(
      <div>
        <p>Are you sure you want to delete this account?</p>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={async () => {
              try {
                await axios.delete(`http://127.0.0.1:8000/remove-account/${account_number}`);
                toast.dismiss();
                toast.success("🗑️ Account deleted successfully!");
                fetchAccounts();
              } catch (error) {
                toast.dismiss();
                toast.error("❌ Failed to delete account!");
              }
            }}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={() => toast.dismiss()}
          >
            No
          </Button>
        </Stack>
      </div>,
      { autoClose: false, closeOnClick: false, draggable: false }
    );
  };

  // Update account
  const handleUpdate = async (account_number) => {
    const newTitle = prompt("Enter new account title:");
    if (!newTitle) return;

    try {
      await axios.put(
        `http://127.0.0.1:8000/update-account/${account_number}`,
        null,
        { params: { updated_title: newTitle } }
      );
      toast.success("✅ Account updated successfully!");
      fetchAccounts();
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to update account!");
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <ATMDisplay title="🏦 All Accounts Overview">
      {loading ? (
        <CircularProgress color="primary" />
      ) : accounts.length === 0 ? (
        <Typography>No accounts found.</Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            boxShadow: "none",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
          }}
        >
          <Table size="small" aria-label="accounts table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#00bcd4" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>Account No</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>Balance (PKR)</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((acc) => (
                <TableRow key={acc.id}>
                  <TableCell>{acc.account_number}</TableCell>
                  <TableCell>{acc.account_title}</TableCell>
                  <TableCell>{acc.account_balance.toLocaleString()}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleUpdate(acc.account_number)}
                      >
                        ✏️ Update
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(acc.account_number)}
                      >
                        🗑️ Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </ATMDisplay>
  );
};

export default ViewAccounts;
