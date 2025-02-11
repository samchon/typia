import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_MapSimple = _test_functional_assertFunction(TypeGuardError)(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.assertFunction(p),
)