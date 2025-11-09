import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapUnion } from "../../structures/MapUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_MapUnion = (): void => _test_functional_assertFunction(TypeGuardError)(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => MapUnion) => typia.functional.assertFunction(p),
)