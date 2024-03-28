import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertParameters_MapUnion =
  _test_functional_assertParameters(TypeGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => MapUnion) => typia.functional.assertParameters(p),
  );
