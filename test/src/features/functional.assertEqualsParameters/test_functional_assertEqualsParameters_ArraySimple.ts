import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsParameters_ArraySimple =
  _test_functional_assertEqualsParameters(TypeGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => ArraySimple) =>
    typia.functional.assertEqualsParameters(p),
  );
