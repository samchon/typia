import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_equalsParameters_TypeTagFormat = _test_functional_equalsParameters(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.equalsParameters(p),
)