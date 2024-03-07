import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateReturnAsync_ObjectHttpNullable =
  _test_functional_validateReturnAsync("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.validateReturn(p),
  );
