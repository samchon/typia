import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_isParameters_ObjectInternal = (): void => _test_functional_isParameters(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.isParameters(p),
)