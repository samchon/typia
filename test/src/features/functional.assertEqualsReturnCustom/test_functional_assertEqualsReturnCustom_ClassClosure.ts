import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsReturnCustom_ClassClosure =
  _test_functional_assertEqualsReturn(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
