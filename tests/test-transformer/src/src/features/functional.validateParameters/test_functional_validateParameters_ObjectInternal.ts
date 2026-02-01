import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateParameters_ObjectInternal = (): void => _test_functional_validateParameters(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.validateParameters(p),
)