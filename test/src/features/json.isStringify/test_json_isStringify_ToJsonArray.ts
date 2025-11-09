import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_isStringify_ToJsonArray = (): void =>
  _test_json_isStringify("ToJsonArray")<ToJsonArray>(ToJsonArray)((input) =>
    typia.json.isStringify<ToJsonArray>(input),
  );
