import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHierarchical = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)