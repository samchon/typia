import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assert_ObjectRequired = _test_assert(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.assert<ObjectRequired>(input),
);
