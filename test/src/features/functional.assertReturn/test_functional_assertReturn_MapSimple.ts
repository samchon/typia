import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertReturn_MapSimple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) => typia.functional.assertReturn(p),
  );
