import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_equalsFunction_ClassClosure = _test_functional_equalsFunction(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.equalsFunction(p),
)