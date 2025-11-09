import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_UltimateUnion = (): void => _test_functional_assertParameters(TypeGuardError)(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => UltimateUnion) => typia.functional.assertParameters(p),
)