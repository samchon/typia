import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_isReturn_ObjectInternal = _test_functional_isReturn(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.isReturn(p),
)