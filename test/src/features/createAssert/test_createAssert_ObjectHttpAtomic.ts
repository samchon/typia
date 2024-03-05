import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssert_ObjectHttpAtomic = _test_assert(TypeGuardError)(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(typia.createAssert<ObjectHttpAtomic>());
