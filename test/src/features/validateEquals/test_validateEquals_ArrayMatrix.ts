import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_validateEquals_ArrayMatrix = (): void =>
  _test_validateEquals("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
    typia.validateEquals<ArrayMatrix>(input),
  );
