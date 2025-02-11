import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagTuple =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
