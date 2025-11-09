import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertEquals_ArraySimple = (): void =>
  _test_assertEquals(TypeGuardError)("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.createAssertEquals<ArraySimple>(),
  );
