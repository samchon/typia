import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectJsonTag")(
      ObjectJsonTag,
    )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
