import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectGeneric = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)