import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_equalsReturnAsync_ObjectNullable =
  _test_functional_equalsReturnAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.equalsReturn(p),
  );
