import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapAlias } from "../../structures/MapAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_MapAlias =
  _test_functional_assertParameters(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.assertParameters(p),
  );
