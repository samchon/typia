import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectHttpNullable =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.assertReturn(p),
  );
