import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsReturnAsync_ObjectPartial =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertEqualsReturn(p),
  );
