import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TypeTagCustom = _test_functional_assertReturnAsync(TypeGuardError)(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertReturn(p),
)