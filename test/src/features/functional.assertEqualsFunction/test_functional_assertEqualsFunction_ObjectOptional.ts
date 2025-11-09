import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectOptional = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.assertEqualsFunction(p),
)