import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertReturnAsync_MapSimple = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.assertReturn(p),
  );
