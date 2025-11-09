import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectHierarchical = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)