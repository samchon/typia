import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertReturnAsync_TypeTagMatrix =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("TypeTagMatrix")(
      TypeTagMatrix,
    )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      typia.functional.assertReturn(p),
    );
