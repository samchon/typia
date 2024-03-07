import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapAlias } from "../../structures/MapAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_MapAlias =
  _test_functional_assertFunction(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.assertFunction(p),
  );
