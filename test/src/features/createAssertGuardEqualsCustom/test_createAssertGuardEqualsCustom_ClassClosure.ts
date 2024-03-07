import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ClassClosure =
  _test_assertGuardEquals(CustomGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )(
    typia.createAssertGuardEquals<ClassClosure>((p) => new CustomGuardError(p)),
  );
