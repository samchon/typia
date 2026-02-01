import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_equalsParametersAsync_ClassClosure = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.equalsParameters(p),
)