import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapUnion } from "../../structures/MapUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_MapUnion = _test_functional_assertFunctionAsync(TypeGuardError)(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => Promise<MapUnion>) =>
    typia.functional.assertFunction(p),
)