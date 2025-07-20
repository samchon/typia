import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_equalsFunction_ObjectNullable = (): void =>
  _test_functional_equalsFunction("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => ObjectNullable) =>
      typia.functional.equalsFunction(p),
  );
