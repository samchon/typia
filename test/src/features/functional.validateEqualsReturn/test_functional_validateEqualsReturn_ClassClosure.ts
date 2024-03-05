import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateEqualsReturn_ClassClosure =
  _test_functional_validateEqualsReturn("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.validateEqualsReturn(p),
  );
