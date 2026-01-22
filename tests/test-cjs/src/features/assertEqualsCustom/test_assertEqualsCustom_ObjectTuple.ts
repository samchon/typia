import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertEqualsCustom_ObjectTuple = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    (input) =>
      typia.assertEquals<ObjectTuple>(input, (p) => new CustomGuardError(p)),
  );
