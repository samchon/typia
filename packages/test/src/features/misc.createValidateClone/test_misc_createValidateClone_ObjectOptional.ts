import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createValidateClone_ObjectOptional =
  _test_misc_validateClone("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    typia.misc.createValidateClone<ObjectOptional>(),
  );
