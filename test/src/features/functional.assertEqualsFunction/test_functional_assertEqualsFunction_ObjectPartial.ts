import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectPartial = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) => typia.functional.assertEqualsFunction(p),
)