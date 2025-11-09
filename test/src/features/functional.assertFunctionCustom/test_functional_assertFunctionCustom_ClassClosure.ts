import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertFunctionCustom_ClassClosure = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
