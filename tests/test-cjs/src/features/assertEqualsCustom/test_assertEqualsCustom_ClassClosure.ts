import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertEqualsCustom_ClassClosure = (): void =>
  _test_assertEquals(CustomGuardError)("ClassClosure")<ClassClosure>(
    ClassClosure,
  )((input) =>
    typia.assertEquals<ClassClosure>(input, (p) => new CustomGuardError(p)),
  );
