import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateFunction_ObjectClosure = (): void => _test_functional_validateFunction(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) => typia.functional.validateFunction(p),
)