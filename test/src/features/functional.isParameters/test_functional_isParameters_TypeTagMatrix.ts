import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_isParameters_TypeTagMatrix = (): void => _test_functional_isParameters(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) => typia.functional.isParameters(p),
)