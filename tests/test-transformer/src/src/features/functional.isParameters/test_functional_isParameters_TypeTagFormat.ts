import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_isParameters_TypeTagFormat = (): void => _test_functional_isParameters(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.isParameters(p),
)