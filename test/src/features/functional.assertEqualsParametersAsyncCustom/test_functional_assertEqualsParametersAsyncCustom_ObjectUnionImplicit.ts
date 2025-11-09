import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectUnionImplicit = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)