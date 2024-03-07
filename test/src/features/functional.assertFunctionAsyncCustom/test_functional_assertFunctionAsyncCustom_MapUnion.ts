import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_MapUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
