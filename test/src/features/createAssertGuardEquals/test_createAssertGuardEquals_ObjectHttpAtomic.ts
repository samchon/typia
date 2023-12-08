import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssertGuardEquals_ObjectHttpAtomic =
  _test_assertGuardEquals("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.createAssertGuardEquals<ObjectHttpAtomic>());
