import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectUnionImplicit = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)