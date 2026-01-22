import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_validateParse_ArrayRecursive = (): void =>
  _test_json_validateParse("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    (input) => typia.json.validateParse<ArrayRecursive>(input),
  );
