import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_is_ObjectUnionDouble = _test_is(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.is<ObjectUnionDouble>(input),
);
