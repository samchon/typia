import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_isReturn_MapSimple = _test_functional_isReturn(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.isReturn(p),
)