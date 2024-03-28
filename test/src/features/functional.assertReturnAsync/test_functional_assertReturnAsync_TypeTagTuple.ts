import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertReturnAsync_TypeTagTuple =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertReturn(p),
  );
