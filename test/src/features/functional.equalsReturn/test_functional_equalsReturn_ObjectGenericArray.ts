import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_equalsReturn_ObjectGenericArray = (): void => _test_functional_equalsReturn(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => ObjectGenericArray) => typia.functional.equalsReturn(p),
)