import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectPartialAndRequired = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) => typia.functional.assertParameters(p),
)