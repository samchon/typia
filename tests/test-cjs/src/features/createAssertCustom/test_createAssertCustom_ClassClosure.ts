import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_createAssertCustom_ClassClosure = (): void =>
  _test_assert(CustomGuardError)("ClassClosure")<ClassClosure>(ClassClosure)(
    typia.createAssert<ClassClosure>((p) => new CustomGuardError(p)),
  );
