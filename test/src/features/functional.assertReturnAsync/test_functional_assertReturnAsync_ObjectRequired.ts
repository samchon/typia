import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertReturnAsync_ObjectRequired =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectRequired")(
      ObjectRequired,
    )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.assertReturn(p),
    );
