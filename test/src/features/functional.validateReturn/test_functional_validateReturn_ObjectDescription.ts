import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateReturn_ObjectDescription = (): void => _test_functional_validateReturn(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.validateReturn(p),
)