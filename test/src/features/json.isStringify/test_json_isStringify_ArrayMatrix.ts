import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_isStringify_ArrayMatrix = (): void =>
  _test_json_isStringify("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
    typia.json.isStringify<ArrayMatrix>(input),
  );
