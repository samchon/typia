import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectHttpConstant = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.assertEqualsReturn(p),
)