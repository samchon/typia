import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_validateFunction_MapUnion = (): void => _test_functional_validateFunction(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => MapUnion) => typia.functional.validateFunction(p),
)