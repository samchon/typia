import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_MapUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
