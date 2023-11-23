import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_validateClone_ObjectSimple = _test_misc_validateClone(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.misc.validateClone<ObjectSimple>(input),
);
