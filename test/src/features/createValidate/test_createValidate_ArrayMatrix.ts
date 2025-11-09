import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createValidate_ArrayMatrix = (): void =>
  _test_validate("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.createValidate<ArrayMatrix>(),
  );
