import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_equalsParameters_TypeTagCustom = _test_functional_equalsParameters(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.equalsParameters(p),
)