import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateEqualsFunctionAsync_ObjectHttpNullable =
  _test_functional_validateEqualsFunctionAsync("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.validateEqualsFunction(p),
  );
