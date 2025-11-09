import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectHttpTypeTag = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectHttpTypeTag"
)(ObjectHttpTypeTag)(
  (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) => typia.functional.assertEqualsFunction(p),
)