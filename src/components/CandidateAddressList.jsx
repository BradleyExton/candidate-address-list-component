import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CandidateAddressListItem from "./CandidateAddressListItem";
import Typography from "@mui/material/Typography";

export default function CandidateAddressList({
  addressList,
  updateAddressStatus,
}) {
  return (
    <Box sx={{ width: "700px" }}>
      <Typography
        variant="h6"
        sx={{ color: "text.secondary", mb: 1 }}
        fontWeight={600}
      >
        Available Addresses
      </Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Stack spacing={2}>
          {addressList.map((address) => (
            <Paper
              key={`address-${address.addressId}`}
              variant="outlined"
              sx={{ p: 2 }}
            >
              <CandidateAddressListItem
                address={address}
                updateAddressStatus={updateAddressStatus}
              />
            </Paper>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
