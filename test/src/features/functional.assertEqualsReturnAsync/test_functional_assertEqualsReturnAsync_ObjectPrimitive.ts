import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertEqualsReturnAsync_ObjectPrimitive =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertEqualsReturn(p),
  );
