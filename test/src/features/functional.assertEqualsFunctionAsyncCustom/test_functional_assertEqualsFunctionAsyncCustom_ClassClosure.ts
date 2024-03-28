import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsFunctionAsyncCustom_ClassClosure =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
