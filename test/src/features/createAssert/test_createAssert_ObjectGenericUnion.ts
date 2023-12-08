import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssert_ObjectGenericUnion = _test_assert(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
  typia.createAssert<ObjectGenericUnion>(),
);
