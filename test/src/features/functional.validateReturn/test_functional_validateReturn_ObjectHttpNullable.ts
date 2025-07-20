import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateReturn_ObjectHttpNullable = (): void =>
  _test_functional_validateReturn("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.validateReturn(p),
  );
