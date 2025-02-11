import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_isReturn_ObjectGenericArray = _test_functional_isReturn(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => ObjectGenericArray) => typia.functional.isReturn(p),
)