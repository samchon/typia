import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectUnionImplicit = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)