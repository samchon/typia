import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertFunctionAsync_MapUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.assertFunction(p),
  );
