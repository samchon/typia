import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectOptional = _test_assert(TypeGuardError)(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.createAssert<ObjectOptional>());
