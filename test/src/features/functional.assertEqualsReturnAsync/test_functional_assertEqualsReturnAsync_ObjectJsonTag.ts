import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertEqualsReturnAsync_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectJsonTag")(
      ObjectJsonTag,
    )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      typia.functional.assertEqualsReturn(p),
    );
