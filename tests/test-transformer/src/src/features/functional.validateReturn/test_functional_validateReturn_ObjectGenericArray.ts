import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_validateReturn_ObjectGenericArray = (): void => _test_functional_validateReturn(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => ObjectGenericArray) => typia.functional.validateReturn(p),
)