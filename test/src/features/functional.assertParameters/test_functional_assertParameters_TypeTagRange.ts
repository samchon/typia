import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertParameters_TypeTagRange = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertParameters(p),
  );
