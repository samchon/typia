import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertEqualsCustom_ObjectInternal = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )(typia.createAssertEquals<ObjectInternal>((p) => new CustomGuardError(p)));
