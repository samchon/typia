import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsReturnAsync_TypeTagTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagTuple")(
      TypeTagTuple,
    )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.assertEqualsReturn(p),
    );
