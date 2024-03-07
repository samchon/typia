import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_isFunctionAsync_ObjectNullable =
  _test_functional_isFunctionAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.isFunction(p),
  );
