import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertEquals_ToJsonUnion = (): void =>
  _test_assertEquals(TypeGuardError)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)(
    typia.createAssertEquals<ToJsonUnion>(),
  );
