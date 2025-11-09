import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertEqualsCustom_ToJsonArray = (): void =>
  _test_assertEquals(CustomGuardError)("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    typia.createAssertEquals<ToJsonArray>((p) => new CustomGuardError(p)),
  );
