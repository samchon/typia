import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_MapAlias = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => Promise<MapAlias>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)