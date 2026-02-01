import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateEqualsReturn_ObjectDescription = (): void => _test_functional_validateEqualsReturn(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.validateEqualsReturn(p),
)