import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateFunction_ObjectHttpNullable = (): void =>
  _test_functional_validateFunction("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.validateFunction(p),
  );
