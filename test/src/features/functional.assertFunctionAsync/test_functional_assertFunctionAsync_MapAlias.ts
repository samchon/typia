import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertFunctionAsync_MapAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.assertFunction(p),
  );
