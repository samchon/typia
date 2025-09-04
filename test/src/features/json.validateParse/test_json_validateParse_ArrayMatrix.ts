import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_validateParse_ArrayMatrix = (): void =>
  _test_json_validateParse("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
    typia.json.validateParse<ArrayMatrix>(input),
  );
