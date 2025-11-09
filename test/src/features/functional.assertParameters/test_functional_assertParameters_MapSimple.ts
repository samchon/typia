import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_MapSimple = (): void => _test_functional_assertParameters(TypeGuardError)(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => MapSimple) => typia.functional.assertParameters(p),
)