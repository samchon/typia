import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertReturnAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertReturn(p),
    );
