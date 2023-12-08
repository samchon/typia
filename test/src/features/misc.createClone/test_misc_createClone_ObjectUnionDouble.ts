import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createClone_ObjectUnionDouble = _test_misc_clone(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.misc.createClone<ObjectUnionDouble>(),
);
