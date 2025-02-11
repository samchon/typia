import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_isParameters_ClassClosure = _test_functional_isParameters(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.isParameters(p),
)