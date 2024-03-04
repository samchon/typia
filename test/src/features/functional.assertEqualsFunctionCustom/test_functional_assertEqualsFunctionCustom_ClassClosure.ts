import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsFunctionCustom_ClassClosure =
  _test_functional_assertEqualsFunction(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
