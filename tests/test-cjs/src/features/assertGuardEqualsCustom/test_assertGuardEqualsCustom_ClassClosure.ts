import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertGuardEqualsCustom_ClassClosure = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )((input) =>
    typia.assertGuardEquals<ClassClosure>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
