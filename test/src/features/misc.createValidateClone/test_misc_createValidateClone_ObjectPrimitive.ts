import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createValidateClone_ObjectPrimitive =
  _test_misc_validateClone("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.misc.createValidateClone<ObjectPrimitive>(),
  );
