import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateReturn_ObjectInternal = (): void => _test_functional_validateReturn(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.validateReturn(p),
)