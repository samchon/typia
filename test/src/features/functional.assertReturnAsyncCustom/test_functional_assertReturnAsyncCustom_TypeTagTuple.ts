import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertReturnAsyncCustom_TypeTagTuple =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
