import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertEquals_ArrayUnion = (): void =>
  _test_assertEquals(TypeGuardError)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.createAssertEquals<ArrayUnion>(),
  );
