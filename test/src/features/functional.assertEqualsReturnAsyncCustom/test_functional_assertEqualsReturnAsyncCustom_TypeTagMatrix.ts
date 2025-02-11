import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagMatrix =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
