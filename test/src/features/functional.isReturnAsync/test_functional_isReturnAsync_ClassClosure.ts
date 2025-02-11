import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_isReturnAsync_ClassClosure = _test_functional_isReturnAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.isReturn(p),
)