import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertFunctionAsyncCustom_MapSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("MapSimple")(
      MapSimple,
    )((p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
