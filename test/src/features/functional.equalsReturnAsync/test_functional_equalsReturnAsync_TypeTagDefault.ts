import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_equalsReturnAsync_TypeTagDefault = (): Promise<void> => _test_functional_equalsReturnAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.equalsReturn(p),
)