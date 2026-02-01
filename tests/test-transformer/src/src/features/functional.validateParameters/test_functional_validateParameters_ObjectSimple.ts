import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateParameters_ObjectSimple = (): void => _test_functional_validateParameters(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => ObjectSimple) => typia.functional.validateParameters(p),
)