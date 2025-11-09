import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateEqualsParameters_ClassClosure = (): void => _test_functional_validateEqualsParameters(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.validateEqualsParameters(p),
)