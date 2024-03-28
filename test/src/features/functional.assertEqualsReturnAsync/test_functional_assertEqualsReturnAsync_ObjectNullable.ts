import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsReturnAsync_ObjectNullable =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertEqualsReturn(p),
  );
