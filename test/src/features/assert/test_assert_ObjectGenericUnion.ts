import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assert_ObjectGenericUnion = _test_assert(TypeGuardError)(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
  typia.assert<ObjectGenericUnion>(input),
);
