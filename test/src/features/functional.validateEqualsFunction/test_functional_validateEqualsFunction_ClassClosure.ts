import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateEqualsFunction_ClassClosure = _test_functional_validateEqualsFunction(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.validateEqualsFunction(p),
)