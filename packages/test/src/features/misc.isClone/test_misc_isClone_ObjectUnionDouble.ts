import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_isClone_ObjectUnionDouble = _test_misc_isClone(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.misc.isClone<ObjectUnionDouble>(input),
);
