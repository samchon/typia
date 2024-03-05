import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateFunction_ObjectNullable =
  _test_functional_validateFunction("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => ObjectNullable) =>
      typia.functional.validateFunction(p),
  );
