import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LocationSearchbar.css";

export const LocationSearchbar = ({ className, handleSelect }) => {
  const [address, setAdress] = useState("");

  const wrappedHandleSelect = async (address) => {
    const geocodeResults = await geocodeByAddress(address);
    const latLng = await getLatLng(geocodeResults[0]);
    handleSelect(address, latLng);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAdress}
      onSelect={wrappedHandleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Autocomplete
          loading={loading}
          className={`LocationSearchbar ${className}`}
          sx={{ width: 300 }}
          options={suggestions}
          autoHighlight
          getOptionLabel={(option) => option.description}
          renderOption={(props, option) => (
            <Box
              {...props}
              {...getSuggestionItemProps(option)}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            >
              {option.description}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...getInputProps()}
              {...params}
              label="Search places..."
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
      )}
    </PlacesAutocomplete>
  );
};
