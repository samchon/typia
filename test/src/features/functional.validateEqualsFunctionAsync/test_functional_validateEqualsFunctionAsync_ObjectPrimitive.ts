import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateEqualsFunctionAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectPrimitive")(
      ObjectPrimitive,
    )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
      typia.functional.validateEqualsFunction(p),
    );
