import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertReturnAsyncCustom_MapAlias =
  _test_functional_assertReturnAsync(CustomGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
