import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectHttpTypeTag = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ObjectHttpTypeTag"
)(ObjectHttpTypeTag)(
  (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) => typia.functional.assertParameters(p),
)