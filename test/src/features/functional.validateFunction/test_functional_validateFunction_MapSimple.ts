import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_validateFunction_MapSimple = (): void => _test_functional_validateFunction(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.validateFunction(p),
)