import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertParametersAsyncCustom_MapSimple =
  _test_functional_assertParametersAsync(CustomGuardError)("MapSimple")(
    MapSimple,
  )((p: (input: MapSimple) => Promise<MapSimple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
