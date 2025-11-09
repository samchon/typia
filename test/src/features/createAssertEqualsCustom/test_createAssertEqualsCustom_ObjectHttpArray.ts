import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertEqualsCustom_ObjectHttpArray = (): void =>
  _test_assertEquals(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.createAssertEquals<ObjectHttpArray>((p) => new CustomGuardError(p)));
