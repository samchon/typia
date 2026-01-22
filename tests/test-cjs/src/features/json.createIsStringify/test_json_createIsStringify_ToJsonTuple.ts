import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_createIsStringify_ToJsonTuple = (): void =>
  _test_json_isStringify("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    typia.json.createIsStringify<ToJsonTuple>(),
  );
