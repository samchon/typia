import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_validateParametersAsync_MapUnion =
  _test_functional_validateParametersAsync("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.validateParameters(p),
  );
