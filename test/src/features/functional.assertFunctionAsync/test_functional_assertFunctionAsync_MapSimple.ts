import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_MapSimple =
  _test_functional_assertFunctionAsync(TypeGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.assertFunction(p),
  );
