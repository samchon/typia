import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertReturn_ClassClosure = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.assertReturn(p),
  );
