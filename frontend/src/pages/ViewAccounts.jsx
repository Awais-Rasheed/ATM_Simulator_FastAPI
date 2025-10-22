import React, { useEffect, useState } from "react";
import {
  Box, Typography, Table, TableHead, TableBody,
  TableRow, TableCell, TableContainer, Paper, Button, CircularProgress
} from "@mui/material";
import { getAllAccounts, deleteAccount } from "../services/accountService";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const ViewAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAccounts = async () => {
    try {
      const response = await getAllAccounts();
      setAccounts(response.data);
    } catch (error) {
      toast.error("Failed to fetch accounts!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (accNum) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      try {
        await deleteAccount(accNum);
        toast.success("Account deleted successfully!");
        fetchAccounts();
      } catch (error) {
        toast.error("Error deleting account!");
      }
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <ATMDisplay title="🏦 All Accounts Overview">
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Account No</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Balance (PKR)</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((acc) => (
                <TableRow key={acc.id}>
                  <TableCell>{acc.account_number}</TableCell>
                  <TableCell>{acc.account_title}</TableCell>
                  <TableCell>{acc.account_balance}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(acc.account_number)}
                    >
                      Delete
                    </Button>
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
