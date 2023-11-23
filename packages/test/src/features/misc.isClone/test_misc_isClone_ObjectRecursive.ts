import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_isClone_ObjectRecursive = _test_misc_isClone(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.misc.isClone<ObjectRecursive>(input),
);
