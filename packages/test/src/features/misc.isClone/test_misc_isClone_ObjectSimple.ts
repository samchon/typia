import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_isClone_ObjectSimple = _test_misc_isClone(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.misc.isClone<ObjectSimple>(input),
);
