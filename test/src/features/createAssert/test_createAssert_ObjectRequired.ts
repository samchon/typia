import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssert_ObjectRequired = _test_assert(TypeGuardError)(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.createAssert<ObjectRequired>());
