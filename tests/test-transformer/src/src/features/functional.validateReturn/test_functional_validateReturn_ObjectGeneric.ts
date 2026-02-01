import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateReturn_ObjectGeneric = (): void => _test_functional_validateReturn(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.validateReturn(p),
)