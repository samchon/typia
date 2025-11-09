import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_equalsFunction_ObjectHttpUndefindable = (): void => _test_functional_equalsFunction(
  "ObjectHttpUndefindable"
)(ObjectHttpUndefindable)(
  (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) => typia.functional.equalsFunction(p),
)