import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_validateStringify_ArrayMatrix = (): void =>
  _test_json_validateStringify("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    (input) => typia.json.validateStringify<ArrayMatrix>(input),
  );
