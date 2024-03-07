import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TypeTagDefault =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertEqualsParameters(p),
  );
