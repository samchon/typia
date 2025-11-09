import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectJsonTag = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.assertEqualsParameters(p),
)