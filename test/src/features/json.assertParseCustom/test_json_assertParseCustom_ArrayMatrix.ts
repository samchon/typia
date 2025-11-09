import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_assertParseCustom_ArrayMatrix = (): void =>
  _test_json_assertParse(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )((input) =>
    typia.json.assertParse<ArrayMatrix>(input, (p) => new CustomGuardError(p)),
  );
