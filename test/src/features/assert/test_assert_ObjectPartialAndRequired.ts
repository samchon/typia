import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assert_ObjectPartialAndRequired = _test_assert(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
  typia.assert<ObjectPartialAndRequired>(input),
);
