import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertParameters_TypeTagTuple =
  _test_functional_assertParameters(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertParameters(p),
  );
