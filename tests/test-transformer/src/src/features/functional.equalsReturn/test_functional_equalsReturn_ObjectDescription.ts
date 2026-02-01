import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_equalsReturn_ObjectDescription = (): void => _test_functional_equalsReturn(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.equalsReturn(p),
)