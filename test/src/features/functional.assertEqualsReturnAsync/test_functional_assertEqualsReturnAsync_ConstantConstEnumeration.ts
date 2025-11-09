import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ConstantConstEnumeration = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ConstantConstEnumeration"
)(ConstantConstEnumeration)(
  (p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>) =>
    typia.functional.assertEqualsReturn(p),
)