import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertCustom_ObjectSimple = (): void =>
  _test_assert(CustomGuardError)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) =>
      typia.assert<ObjectSimple>(input, (p) => new CustomGuardError(p)),
  );
