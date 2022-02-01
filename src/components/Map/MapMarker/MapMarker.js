import { Marker, InfoBox } from "@react-google-maps/api";
import "./MapMarker.scss";

const splitLabel = (label) => {
  let i = label.indexOf(",");
  return { mainLabel: label.slice(0, i), secondaryLabel: label.slice(i + 1) };
};

export const MapMarker = ({ marker }) => {
  const splitedLabel = splitLabel(marker.label);
  return (
    <div>
      <Marker position={marker.position} />
      <InfoBox
        position={marker.position}
        options={{
          closeBoxURL: "",
          enableEventPropagation: true,
          alignBottom: true,
        }}
      >
        <div className="MapMarkerLabelContainer">
          <span className="MapMarkerLabel MainLabel">
            {splitedLabel.mainLabel}
          </span>
          <span className="MapMarkerLabel SecondaryLabel">
            {splitedLabel.secondaryLabel} asdfasd adsfasd asdf asdf
            aasdfasdfsaasdfa adsfafasdfasdfasdfasd
          </span>
        </div>
      </InfoBox>
    </div>
  );
};
