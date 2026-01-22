import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertFunction_MapSimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) => typia.functional.assertFunction(p),
  );
