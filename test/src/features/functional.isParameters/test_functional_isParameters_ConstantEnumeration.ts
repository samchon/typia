import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_isParameters_ConstantEnumeration = (): void => _test_functional_isParameters(
  "ConstantEnumeration"
)(ConstantEnumeration)(
  (p: (input: ConstantEnumeration) => ConstantEnumeration) => typia.functional.isParameters(p),
)