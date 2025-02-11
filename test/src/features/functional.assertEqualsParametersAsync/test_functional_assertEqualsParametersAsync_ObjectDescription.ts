import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsParametersAsync_ObjectDescription =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectDescription",
  )(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertEqualsParameters(p),
  );
