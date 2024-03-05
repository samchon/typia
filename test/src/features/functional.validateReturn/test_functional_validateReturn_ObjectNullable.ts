import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateReturn_ObjectNullable =
  _test_functional_validateReturn("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => ObjectNullable) =>
      typia.functional.validateReturn(p),
  );
