import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateReturnAsync_ObjectNullable =
  _test_functional_validateReturnAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.validateReturn(p),
  );
