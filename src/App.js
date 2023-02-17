import { useEffect, useState } from "react";
import CandidateAddressList from "./components/CandidateAddressList";
import { getMatchingAddresses } from "./getMatchingAddressesResponse";

function App() {
  const [addressList, setAddressList] = useState([]);
  // Mock Fetching candidate addresses
  useEffect(() => {
    setAddressList(getMatchingAddresses.items);
  }, []);
  const parcelId = 123;

  const updateAddressStatus = (addressToUpdate) => {
    fetch("/validate_source_address", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ parcelId, addressId: addressToUpdate.addressId }),
    });

    // Mock Endpoint functionality
    let addressListCopy = [...addressList].map((address) => ({
      ...address,
      validated: false,
    }));
    const updatedAddressIndex = addressListCopy.findIndex(
      (address) => address.addressId === addressToUpdate.addressId
    );
    addressListCopy[updatedAddressIndex].validated = !addressToUpdate.validated;
    setAddressList(addressListCopy);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <CandidateAddressList
        addressList={addressList}
        updateAddressStatus={updateAddressStatus}
      />
    </div>
  );
}

export default App;
