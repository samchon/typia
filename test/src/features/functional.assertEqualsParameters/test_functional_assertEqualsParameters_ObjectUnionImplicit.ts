import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectUnionImplicit = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) => typia.functional.assertEqualsParameters(p),
)