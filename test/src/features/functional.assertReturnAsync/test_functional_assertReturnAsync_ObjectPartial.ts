import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertReturnAsync_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertReturn(p),
    );
