import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_createValidateClone_ObjectTuple = (): void =>
  _test_misc_validateClone("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    typia.misc.createValidateClone<ObjectTuple>(),
  );
