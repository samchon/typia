import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHierarchical =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectHierarchical",
  )(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
