import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateFunction_ObjectDescription = (): void => _test_functional_validateFunction(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.validateFunction(p),
)