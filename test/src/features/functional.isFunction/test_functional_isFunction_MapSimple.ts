import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_isFunction_MapSimple = _test_functional_isFunction(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.isFunction(p),
)