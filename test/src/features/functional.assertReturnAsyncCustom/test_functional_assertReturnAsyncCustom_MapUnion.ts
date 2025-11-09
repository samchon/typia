import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertReturnAsyncCustom_MapUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("MapUnion")(MapUnion)(
      (p: (input: MapUnion) => Promise<MapUnion>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
