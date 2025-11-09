import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertFunctionAsync_MapSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("MapSimple")(
      MapSimple,
    )((p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.assertFunction(p),
    );
