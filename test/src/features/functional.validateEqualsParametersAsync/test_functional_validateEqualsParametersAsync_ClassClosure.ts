import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateEqualsParametersAsync_ClassClosure = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.validateEqualsParameters(p),
)