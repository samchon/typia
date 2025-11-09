import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectHttpConstant = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => ObjectHttpConstant) => typia.functional.assertEqualsFunction(p),
)