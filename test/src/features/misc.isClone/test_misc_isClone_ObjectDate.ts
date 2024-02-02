import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_isClone_ObjectDate = _test_misc_isClone(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) => typia.misc.isClone<ObjectDate>(input));
