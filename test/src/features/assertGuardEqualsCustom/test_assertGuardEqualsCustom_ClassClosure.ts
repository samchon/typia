import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ClassClosure =
  _test_assertGuardEquals(CustomGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )((input) =>
    typia.assertGuardEquals<ClassClosure>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
