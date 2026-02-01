import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_equalsReturnAsync_TypeTagFormat = (): Promise<void> => _test_functional_equalsReturnAsync(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.equalsReturn(p),
)