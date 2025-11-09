import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsParameters_TypeTagTuple = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertEqualsParameters(p),
  );
