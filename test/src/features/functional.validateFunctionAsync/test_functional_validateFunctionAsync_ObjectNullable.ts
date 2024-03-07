import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateFunctionAsync_ObjectNullable =
  _test_functional_validateFunctionAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.validateFunction(p),
  );
