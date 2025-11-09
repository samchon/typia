import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateParametersAsync_ClassClosure = (): Promise<void> => _test_functional_validateParametersAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.validateParameters(p),
)