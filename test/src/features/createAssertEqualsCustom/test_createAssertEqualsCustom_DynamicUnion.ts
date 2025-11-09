import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertEqualsCustom_DynamicUnion = (): void =>
  _test_assertEquals(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.createAssertEquals<DynamicUnion>((p) => new CustomGuardError(p)));
