import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsReturnAsync_ObjectSimple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertEqualsReturn(p),
  );
