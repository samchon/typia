import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertReturn_MapUnion =
  _test_functional_assertReturn(TypeGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => MapUnion) => typia.functional.assertReturn(p),
  );
