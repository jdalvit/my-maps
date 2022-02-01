import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./LocationSearchbar.scss";
import { splitStringByMatch } from "./utils";

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
      highlightFirstSuggestion
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <>
          <div className={`LocationSearchbar ${className}`}>
            <input
              {...getInputProps({
                placeholder: "Search places ...",
                className: "LocationSearchbarSearchInput",
              })}
            />
            <div
              className={`LocationSearchbarDropdownContainer ${
                suggestions.length !== 0 ? "NotEmpty" : undefined
              }`}
            >
              {suggestions.map((suggestion, i) => {
                const splitDescription = splitStringByMatch(
                  suggestion.description,
                  address
                );
                return (
                  <p
                    key={`suggestion.${i}`}
                    {...getSuggestionItemProps(suggestion, {
                      className: `LocationSearchbarSuggestion ${
                        suggestion.active ? "ActiveSuggestion" : undefined
                      }`,
                    })}
                  >
                    {splitDescription.prefix}
                    <b>{splitDescription.match}</b>
                    {splitDescription.suffix}
                  </p>
                );
              })}
            </div>
          </div>
        </>
      )}
    </PlacesAutocomplete>
  );
};
