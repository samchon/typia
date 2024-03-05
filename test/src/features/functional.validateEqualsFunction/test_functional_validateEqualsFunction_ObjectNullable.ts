import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateEqualsFunction_ObjectNullable =
  _test_functional_validateEqualsFunction("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => ObjectNullable) =>
      typia.functional.validateEqualsFunction(p),
  );
