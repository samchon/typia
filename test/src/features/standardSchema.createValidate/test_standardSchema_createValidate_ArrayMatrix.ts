import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_standardSchema_createValidate_ArrayMatrix = (): void =>
  _test_standardSchema_validate("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.createValidate<ArrayMatrix>(),
  );
