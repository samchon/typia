import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateFunction_ClassClosure = (): void => _test_functional_validateFunction(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.validateFunction(p),
)