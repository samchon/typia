import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertReturnAsyncCustom_TypeTagMatrix =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
