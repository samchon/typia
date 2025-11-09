import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectHttpArray = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)