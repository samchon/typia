import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_isParameters_TypeTagCustom = _test_functional_isParameters(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.isParameters(p),
)