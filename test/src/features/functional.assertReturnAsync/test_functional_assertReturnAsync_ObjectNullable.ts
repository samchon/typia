import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertReturnAsync_ObjectNullable =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectNullable")(
      ObjectNullable,
    )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.assertReturn(p),
    );
