import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ClassClosure =
  _test_functional_assertFunction(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
