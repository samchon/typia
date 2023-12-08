import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_validateClone_ObjectPartial = _test_misc_validateClone(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.misc.validateClone<ObjectPartial>(input),
);
