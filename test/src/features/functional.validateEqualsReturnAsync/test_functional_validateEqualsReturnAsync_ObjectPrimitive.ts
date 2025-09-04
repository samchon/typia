import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateEqualsReturnAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectPrimitive")(
      ObjectPrimitive,
    )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
      typia.functional.validateEqualsReturn(p),
    );
