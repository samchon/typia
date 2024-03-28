import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertReturn_MapAlias =
  _test_functional_assertReturn(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.assertReturn(p),
  );
