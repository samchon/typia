import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TypeTagType = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertEqualsReturn(p),
)