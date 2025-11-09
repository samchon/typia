import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_isReturn_TypeTagMatrix = (): void => _test_functional_isReturn(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) => typia.functional.isReturn(p),
)