import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertParametersAsyncCustom_TypeTagTuple =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
