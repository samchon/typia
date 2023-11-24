import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createValidateClone_ObjectUndefined =
  _test_misc_validateClone("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
    typia.misc.createValidateClone<ObjectUndefined>(),
  );
