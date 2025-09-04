import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertCustom_ObjectTuple = (): void =>
  _test_assert(CustomGuardError)("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    (input) => typia.assert<ObjectTuple>(input, (p) => new CustomGuardError(p)),
  );
