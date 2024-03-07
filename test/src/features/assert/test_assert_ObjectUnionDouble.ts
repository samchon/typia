import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_assert_ObjectUnionDouble = _test_assert(TypeGuardError)(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.assert<ObjectUnionDouble>(input),
);
