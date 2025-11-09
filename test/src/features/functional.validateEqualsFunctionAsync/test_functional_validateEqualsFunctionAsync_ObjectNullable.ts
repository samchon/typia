import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateEqualsFunctionAsync_ObjectNullable =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectNullable")(
      ObjectNullable,
    )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.validateEqualsFunction(p),
    );
