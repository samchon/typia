import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createValidateClone_ObjectRecursive = (): void =>
  _test_misc_validateClone("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    typia.misc.createValidateClone<ObjectRecursive>(),
  );
