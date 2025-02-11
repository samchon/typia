import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_isReturn_ObjectGenericAlias = _test_functional_isReturn(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.isReturn(p),
)