import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectDescription = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.assertEqualsFunction(p),
)