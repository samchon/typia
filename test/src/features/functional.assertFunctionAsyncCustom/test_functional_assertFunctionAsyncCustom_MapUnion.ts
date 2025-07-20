import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertFunctionAsyncCustom_MapUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("MapUnion")(
      MapUnion,
    )((p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
