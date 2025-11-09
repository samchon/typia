import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createValidateClone_ArrayMatrix = (): void =>
  _test_misc_validateClone("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.misc.createValidateClone<ArrayMatrix>(),
  );
