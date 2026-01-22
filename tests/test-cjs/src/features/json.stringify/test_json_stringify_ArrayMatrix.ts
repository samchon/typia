import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_stringify_ArrayMatrix = (): void =>
  _test_json_stringify("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
    typia.json.stringify<ArrayMatrix>(input),
  );
