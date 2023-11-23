import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertEquals_ObjectUndefined = _test_assertEquals(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.assertEquals<ObjectUndefined>(input),
);
