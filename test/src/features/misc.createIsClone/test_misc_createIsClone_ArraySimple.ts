import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_createIsClone_ArraySimple = (): void =>
  _test_misc_isClone("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.misc.createIsClone<ArraySimple>(),
  );
