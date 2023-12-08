import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertEquals_ObjectUnionDouble = _test_assertEquals(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.createAssertEquals<ObjectUnionDouble>(),
);
