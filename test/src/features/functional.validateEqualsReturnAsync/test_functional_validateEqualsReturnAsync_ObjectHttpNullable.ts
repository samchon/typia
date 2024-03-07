import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateEqualsReturnAsync_ObjectHttpNullable =
  _test_functional_validateEqualsReturnAsync("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.validateEqualsReturn(p),
  );
