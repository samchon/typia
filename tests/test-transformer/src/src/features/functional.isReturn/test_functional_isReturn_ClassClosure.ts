import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_isReturn_ClassClosure = (): void => _test_functional_isReturn(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.isReturn(p),
)