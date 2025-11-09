import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsParameters_ObjectNullable = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertEqualsParameters(p),
  );
