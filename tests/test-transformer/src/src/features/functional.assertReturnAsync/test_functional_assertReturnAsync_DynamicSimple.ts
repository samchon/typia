import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicSimple = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertReturn(p),
)