import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_isReturn_ObjectPartialAndRequired = (): void => _test_functional_isReturn(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) => typia.functional.isReturn(p),
)