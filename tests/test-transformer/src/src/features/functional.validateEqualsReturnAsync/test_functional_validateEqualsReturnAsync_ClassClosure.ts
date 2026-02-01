import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateEqualsReturnAsync_ClassClosure = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.validateEqualsReturn(p),
)