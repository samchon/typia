import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_equalsReturnAsync_ClassClosure =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ClassClosure")(ClassClosure)(
      (p: (input: ClassClosure) => Promise<ClassClosure>) =>
        typia.functional.equalsReturn(p),
    );
