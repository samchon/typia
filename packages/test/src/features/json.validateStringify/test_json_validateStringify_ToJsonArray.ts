import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_validateStringify_ToJsonArray =
  _test_json_validateStringify("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    (input) => typia.json.validateStringify<ToJsonArray>(input),
  );
