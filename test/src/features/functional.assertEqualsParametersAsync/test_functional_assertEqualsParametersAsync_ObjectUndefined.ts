import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsParametersAsync_ObjectUndefined =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectUndefined",
  )(ObjectUndefined)(
    (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      typia.functional.assertEqualsParameters(p),
  );
