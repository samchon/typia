import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateParameters_TypeTagCustom = (): void => _test_functional_validateParameters(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.validateParameters(p),
)