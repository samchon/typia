import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assert_ObjectSimple = (): void =>
  _test_assert(TypeGuardError)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.assert<ObjectSimple>(input),
  );
