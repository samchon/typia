import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_isParametersAsync_ConstantAtomicWrapper = (): Promise<void> => _test_functional_isParametersAsync(
  "ConstantAtomicWrapper"
)(ConstantAtomicWrapper)(
  (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
    typia.functional.isParameters(p),
)