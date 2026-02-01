import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateParameters_ObjectUndefined = (): void => _test_functional_validateParameters(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.validateParameters(p),
)