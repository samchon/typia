import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateReturn_ObjectPrimitive = (): void => _test_functional_validateReturn(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => ObjectPrimitive) => typia.functional.validateReturn(p),
)