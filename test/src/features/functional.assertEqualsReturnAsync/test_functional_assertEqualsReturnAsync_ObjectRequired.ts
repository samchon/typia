import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsReturnAsync_ObjectRequired =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectRequired")(
      ObjectRequired,
    )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.assertEqualsReturn(p),
    );
