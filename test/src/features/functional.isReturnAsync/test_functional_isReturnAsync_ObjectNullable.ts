import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_isReturnAsync_ObjectNullable = (): Promise<void> =>
  _test_functional_isReturnAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.isReturn(p),
  );
