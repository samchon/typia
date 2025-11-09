import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_equalsReturnAsync_ObjectHttpNullable =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectHttpNullable")(
      ObjectHttpNullable,
    )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.equalsReturn(p),
    );
