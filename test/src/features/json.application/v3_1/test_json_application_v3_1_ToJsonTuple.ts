import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_application_v3_1_ToJsonTuple = _test_json_application({
  version: "3.1",
  name: "ToJsonTuple",
})(typia.json.application<ToJsonTupleApplication, "3.1">());

interface ToJsonTupleApplication {
  insert(first: ToJsonTuple): Promise<void>;
  reduce(first: ToJsonTuple, second: ToJsonTuple | null): Promise<ToJsonTuple>;
  coalesce(
    first: ToJsonTuple | null,
    second: ToJsonTuple | null,
    third?: ToJsonTuple | null,
  ): Promise<ToJsonTuple | null>;
}
