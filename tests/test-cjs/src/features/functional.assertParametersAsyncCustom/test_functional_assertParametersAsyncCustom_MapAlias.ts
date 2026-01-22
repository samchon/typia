import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertParametersAsyncCustom_MapAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("MapAlias")(
      MapAlias,
    )((p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
