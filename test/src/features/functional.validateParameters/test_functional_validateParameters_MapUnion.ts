import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_validateParameters_MapUnion =
  _test_functional_validateParameters("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => MapUnion) =>
      typia.functional.validateParameters(p),
  );
