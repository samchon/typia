import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateReturn_ObjectClosure = (): void => _test_functional_validateReturn(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) => typia.functional.validateReturn(p),
)