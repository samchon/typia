import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertEqualsCustom_ObjectPrimitive = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.createAssertEquals<ObjectPrimitive>((p) => new CustomGuardError(p)));
