import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimple } from "../../structures/MapSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_MapSimple = _test_functional_assertReturn(CustomGuardError)(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)