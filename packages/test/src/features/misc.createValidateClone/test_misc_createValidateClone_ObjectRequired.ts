import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createValidateClone_ObjectRequired =
  _test_misc_validateClone("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.misc.createValidateClone<ObjectRequired>(),
  );
