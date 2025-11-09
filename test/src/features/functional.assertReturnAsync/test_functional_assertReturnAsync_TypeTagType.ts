import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TypeTagType = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertReturn(p),
)