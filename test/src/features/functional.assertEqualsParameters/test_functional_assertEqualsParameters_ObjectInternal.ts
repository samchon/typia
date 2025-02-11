import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectInternal = _test_functional_assertEqualsParameters(TypeGuardError)(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.assertEqualsParameters(p),
)