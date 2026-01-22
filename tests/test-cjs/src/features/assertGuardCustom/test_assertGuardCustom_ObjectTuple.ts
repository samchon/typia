import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertGuardCustom_ObjectTuple = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    (input) =>
      typia.assertGuard<ObjectTuple>(input, (p) => new CustomGuardError(p)),
  );
