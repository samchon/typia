import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_isParameters_MapSimple = _test_functional_isParameters(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.isParameters(p),
)