import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssert_ObjectUnionImplicit = _test_assert(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)(
  typia.createAssert<ObjectUnionImplicit>(),
);
