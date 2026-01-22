import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_clone_ArraySimple = (): void =>
  _test_misc_clone("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
    typia.misc.clone<ArraySimple>(input),
  );
