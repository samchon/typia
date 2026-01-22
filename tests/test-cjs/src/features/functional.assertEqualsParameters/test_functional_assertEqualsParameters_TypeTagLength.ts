import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsParameters_TypeTagLength = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertEqualsParameters(p),
  );
