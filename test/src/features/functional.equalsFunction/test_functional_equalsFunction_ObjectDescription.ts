import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_equalsFunction_ObjectDescription = (): void => _test_functional_equalsFunction(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.equalsFunction(p),
)