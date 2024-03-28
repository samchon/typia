import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsReturnAsync_ObjectDescription =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.assertEqualsReturn(p),
  );
