import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertReturnCustom_ClassClosure = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
