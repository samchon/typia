import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_equalsFunction_TypeTagFormat = (): void => _test_functional_equalsFunction(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.equalsFunction(p),
)