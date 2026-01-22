import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertReturnAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectPrimitive")(
      ObjectPrimitive,
    )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
      typia.functional.assertReturn(p),
    );
