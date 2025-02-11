import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_equalsParameters_TypeTagType = _test_functional_equalsParameters(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.equalsParameters(p),
)