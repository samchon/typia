import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_isParametersAsync_NativeUnion = (): Promise<void> => _test_functional_isParametersAsync(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.isParameters(p),
)