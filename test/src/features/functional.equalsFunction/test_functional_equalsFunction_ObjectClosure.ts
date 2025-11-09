import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_equalsFunction_ObjectClosure = (): void => _test_functional_equalsFunction(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) => typia.functional.equalsFunction(p),
)