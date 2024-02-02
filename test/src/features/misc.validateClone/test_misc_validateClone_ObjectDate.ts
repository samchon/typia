import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_validateClone_ObjectDate = _test_misc_validateClone(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) =>
  typia.misc.validateClone<ObjectDate>(input),
);
