import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_createStringify_ToJsonTuple = (): void =>
  _test_json_stringify("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    typia.json.createStringify<ToJsonTuple>(),
  );
