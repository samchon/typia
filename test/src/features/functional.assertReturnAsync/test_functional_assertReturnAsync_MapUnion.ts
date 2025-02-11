import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertReturnAsync_MapUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.assertReturn(p),
  );
