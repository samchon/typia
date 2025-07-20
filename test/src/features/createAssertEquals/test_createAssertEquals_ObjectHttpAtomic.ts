import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssertEquals_ObjectHttpAtomic = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.createAssertEquals<ObjectHttpAtomic>());
