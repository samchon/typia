import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_clone_ObjectRecursive = (): void =>
  _test_misc_clone("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    (input) => typia.misc.clone<ObjectRecursive>(input),
  );
