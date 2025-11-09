import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_equalsReturnAsync_TypeTagInfinite = (): Promise<void> => _test_functional_equalsReturnAsync(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.equalsReturn(p),
)