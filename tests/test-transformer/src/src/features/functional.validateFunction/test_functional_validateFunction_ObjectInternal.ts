import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateFunction_ObjectInternal = (): void => _test_functional_validateFunction(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.validateFunction(p),
)