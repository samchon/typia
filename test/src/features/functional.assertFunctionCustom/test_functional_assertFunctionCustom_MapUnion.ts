import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_MapUnion =
  _test_functional_assertFunction(CustomGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => MapUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
