import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./LocationSearchbar.scss";

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
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <div className={`LocationSearchbar ${className}`}>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "LocationSearchbarSearchInput",
              })}
            />
            <div className="LocationSearchbarDropdownContainer">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const suggestionClassName = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={i}
                    {...getSuggestionItemProps(suggestion, {
                      className: `${suggestionClassName} LocationSearchbarSearchInput`,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </PlacesAutocomplete>
  );
};
