import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertCustom_ClassClosure = _test_assert(CustomGuardError)(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input) =>
  typia.assert<ClassClosure>(input, (p) => new CustomGuardError(p)),
);
