import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TypeTagLength = _test_functional_assertReturnAsync(TypeGuardError)(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertReturn(p),
)