import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertFunctionAsyncCustom_MapAlias =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("MapAlias")(
      MapAlias,
    )((p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
