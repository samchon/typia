import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssert_ObjectUnionDouble = _test_assert(TypeGuardError)(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.createAssert<ObjectUnionDouble>(),
);
