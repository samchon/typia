import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertParameters_ObjectHttpNullable = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertParameters(p),
  );
