import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsParametersAsync_ObjectInternal =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectInternal",
  )(ObjectInternal)((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.assertEqualsParameters(p),
  );
