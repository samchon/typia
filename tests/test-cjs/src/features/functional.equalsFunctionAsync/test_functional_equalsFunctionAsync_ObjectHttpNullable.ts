import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_equalsFunctionAsync_ObjectHttpNullable =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectHttpNullable")(
      ObjectHttpNullable,
    )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.equalsFunction(p),
    );
