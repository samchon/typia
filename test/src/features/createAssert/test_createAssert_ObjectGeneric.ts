import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectGeneric = _test_assert(TypeGuardError)(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.createAssert<ObjectGeneric>());
