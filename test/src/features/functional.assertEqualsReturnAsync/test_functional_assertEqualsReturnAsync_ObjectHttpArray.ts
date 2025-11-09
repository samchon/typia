import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertEqualsReturnAsync_ObjectHttpArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectHttpArray")(
      ObjectHttpArray,
    )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      typia.functional.assertEqualsReturn(p),
    );
