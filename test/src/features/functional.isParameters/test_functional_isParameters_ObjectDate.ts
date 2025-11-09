import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_isParameters_ObjectDate = (): void => _test_functional_isParameters(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => ObjectDate) => typia.functional.isParameters(p),
)