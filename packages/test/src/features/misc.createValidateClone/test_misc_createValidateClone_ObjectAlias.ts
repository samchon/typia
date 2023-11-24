import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createValidateClone_ObjectAlias =
  _test_misc_validateClone("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    typia.misc.createValidateClone<ObjectAlias>(),
  );
