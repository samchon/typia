import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertEquals_ToJsonTuple = (): void =>
  _test_assertEquals(TypeGuardError)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    typia.createAssertEquals<ToJsonTuple>(),
  );
