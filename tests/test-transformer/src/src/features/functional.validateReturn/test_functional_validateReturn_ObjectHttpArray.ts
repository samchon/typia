import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateReturn_ObjectHttpArray = (): void => _test_functional_validateReturn(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.validateReturn(p),
)