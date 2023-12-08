import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_isClone_ObjectPartial = _test_misc_isClone(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.misc.isClone<ObjectPartial>(input),
);
