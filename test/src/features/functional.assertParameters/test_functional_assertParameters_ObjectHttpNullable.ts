import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectHttpNullable =
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertParameters(p),
  );
