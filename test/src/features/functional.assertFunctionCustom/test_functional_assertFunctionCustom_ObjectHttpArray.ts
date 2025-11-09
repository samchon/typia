import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectHttpArray = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)