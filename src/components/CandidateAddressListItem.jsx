import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Row = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Text = ({ children, label }) => (
  <Typography
    variant="body2"
    gutterBottom
    mr={0.6}
    sx={{ color: label ? "text.secondary" : "text.primary" }}
  >
    {children}
  </Typography>
);

export default function CandidateAddressListItem({
  address,
  updateAddressStatus,
}) {
  return (
    <Stack>
      <Row>
        <Typography variant="body2" fontWeight={900} gutterBottom>
          {address.addressId}
        </Typography>
        <Button
          variant="text"
          size="small"
          onClick={() =>
            updateAddressStatus(address.addressId, !address.validated)
          }
        >
          {address.validated ? "Revoke" : "Associate"}
        </Button>
      </Row>
      <Row>
        <Text label>Street No.</Text>
        <Text>{address?.streetNo}</Text>
      </Row>
      <Row>
        <Text label>Street Name</Text>
        <Text>{address?.streetName}</Text>
      </Row>
      <Row>
        <Text label>Street Type</Text>
        <Text>{address?.streetType}</Text>
      </Row>
      <Row>
        <Text label>City</Text>
        <Text>{address?.city}</Text>
      </Row>
      <Row>
        <Text label>State</Text>
        <Text>{address?.state}</Text>
      </Row>
      <Row>
        <Text label>Zip</Text>
        <Text>{address?.zip}</Text>
      </Row>
    </Stack>
  );
}
