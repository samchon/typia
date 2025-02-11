import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimple } from "../../structures/MapSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_MapSimple = _test_functional_assertReturnAsync(CustomGuardError)(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => Promise<MapSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)