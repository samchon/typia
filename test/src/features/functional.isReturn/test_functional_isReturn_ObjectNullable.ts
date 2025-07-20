import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_isReturn_ObjectNullable = (): void =>
  _test_functional_isReturn("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => ObjectNullable) =>
      typia.functional.isReturn(p),
  );
