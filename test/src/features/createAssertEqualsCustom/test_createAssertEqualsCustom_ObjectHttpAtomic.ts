import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssertEqualsCustom_ObjectHttpAtomic =
  _test_assertEquals(CustomGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.createAssertEquals<ObjectHttpAtomic>((p) => new CustomGuardError(p)));
