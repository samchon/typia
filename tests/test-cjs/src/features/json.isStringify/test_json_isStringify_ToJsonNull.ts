import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_isStringify_ToJsonNull = (): void =>
  _test_json_isStringify("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
    typia.json.isStringify<ToJsonNull>(input),
  );
