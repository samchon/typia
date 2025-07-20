import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertGuard_ClassClosure = (): void =>
  _test_assertGuard(TypeGuardError)("ClassClosure")<ClassClosure>(ClassClosure)(
    typia.createAssertGuard<ClassClosure>(),
  );
