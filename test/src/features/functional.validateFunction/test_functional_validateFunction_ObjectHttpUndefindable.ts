import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateFunction_ObjectHttpUndefindable = (): void => _test_functional_validateFunction(
  "ObjectHttpUndefindable"
)(ObjectHttpUndefindable)(
  (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) => typia.functional.validateFunction(p),
)