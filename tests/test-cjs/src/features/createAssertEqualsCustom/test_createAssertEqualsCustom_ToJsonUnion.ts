import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertEqualsCustom_ToJsonUnion = (): void =>
  _test_assertEquals(CustomGuardError)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)(
    typia.createAssertEquals<ToJsonUnion>((p) => new CustomGuardError(p)),
  );
