import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertReturnAsync_ObjectDate =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.assertReturn(p),
  );
