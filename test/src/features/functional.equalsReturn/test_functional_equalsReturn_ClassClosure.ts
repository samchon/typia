import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_equalsReturn_ClassClosure = _test_functional_equalsReturn(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.equalsReturn(p),
)