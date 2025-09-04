import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertFunctionCustom_MapSimple = (): void =>
  _test_functional_assertFunction(CustomGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
