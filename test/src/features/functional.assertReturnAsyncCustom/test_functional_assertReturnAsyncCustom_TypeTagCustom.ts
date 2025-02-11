import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertReturnAsyncCustom_TypeTagCustom =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
