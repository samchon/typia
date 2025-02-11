import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertParametersCustom_TypeTagTuple =
  _test_functional_assertParameters(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
