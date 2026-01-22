import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assert_ClassClosure = (): void =>
  _test_assert(TypeGuardError)("ClassClosure")<ClassClosure>(ClassClosure)(
    (input) => typia.assert<ClassClosure>(input),
  );
