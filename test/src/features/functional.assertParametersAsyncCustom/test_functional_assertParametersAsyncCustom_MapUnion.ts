import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertParametersAsyncCustom_MapUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("MapUnion")(
    MapUnion,
  )((p: (input: MapUnion) => Promise<MapUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
