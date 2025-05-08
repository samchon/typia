import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapAlias } from "../../structures/MapAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_MapAlias = _test_functional_assertReturn(TypeGuardError)(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => MapAlias) => typia.functional.assertReturn(p),
)