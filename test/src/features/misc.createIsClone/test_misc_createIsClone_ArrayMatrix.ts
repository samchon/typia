import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createIsClone_ArrayMatrix = (): void =>
  _test_misc_isClone("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.misc.createIsClone<ArrayMatrix>(),
  );
