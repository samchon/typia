import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertGuardEqualsCustom_ClassClosure = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )(
    typia.createAssertGuardEquals<ClassClosure>((p) => new CustomGuardError(p)),
  );
