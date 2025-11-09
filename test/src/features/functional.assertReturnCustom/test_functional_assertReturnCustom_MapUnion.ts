import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapUnion } from "../../structures/MapUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_MapUnion = (): void => _test_functional_assertReturn(CustomGuardError)(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => MapUnion) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)