import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_isFunction_MapUnion = _test_functional_isFunction(
  "MapUnion",
)(MapUnion)((p: (input: MapUnion) => MapUnion) =>
  typia.functional.isFunction(p),
);
