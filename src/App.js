import { useEffect, useState } from "react";
import CandidateAddressList from "./components/CandidateAddressList";
import { getMatchingAddresses } from "./getMatchingAddressesResponse";

function App() {
  const [addressList, setAddressList] = useState([]);
  // Mock Fetching candidate addresses
  useEffect(() => {
    setAddressList(getMatchingAddresses.items);
  }, []);

  // Mock validating and invalidating address
  const updateAddressStatus = (addressId, validated) => {
    // Invalidate All addresses to ensure only one address is validated at a time
    let addressListCopy = [...addressList].map((address) => ({
      ...address,
      validated: false,
    }));
    const updatedAddressIndex = addressListCopy.findIndex(
      (address) => address.addressId === addressId
    );
    addressListCopy[updatedAddressIndex].validated = validated;
    setAddressList(addressListCopy);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
