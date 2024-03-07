import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateEqualsReturnAsync_ObjectNullable =
  _test_functional_validateEqualsReturnAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.validateEqualsReturn(p),
  );
