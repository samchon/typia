import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_isParametersAsync_ClassClosure = (): Promise<void> => _test_functional_isParametersAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.isParameters(p),
)