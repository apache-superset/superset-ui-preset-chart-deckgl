type Coordinate = [number, number];

/** Format originally used by the Polygon plugin */
type CustomFeature = {
  polygon: Coordinate[];
};

/**
 * Format that is geojson standard
 * https://geojson.org/geojson-spec.html
 */
type GeojsonFeature = {
  polygon: {
    type: 'Feature';
    geometry: {
      type: 'Polygon';
      coordinates: Coordinate[];
    };
  };
};

function isCustomFeature(feature: CustomFeature | GeojsonFeature): feature is CustomFeature {
  return Array.isArray(feature.polygon);
}

export default function getCoordinatesFromFeature(feature: CustomFeature | GeojsonFeature) {
  return isCustomFeature(feature) ? feature.polygon : feature.polygon.geometry.coordinates;
}
