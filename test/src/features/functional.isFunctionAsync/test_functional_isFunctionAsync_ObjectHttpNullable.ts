import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_isFunctionAsync_ObjectHttpNullable =
  _test_functional_isFunctionAsync("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.isFunction(p),
  );
