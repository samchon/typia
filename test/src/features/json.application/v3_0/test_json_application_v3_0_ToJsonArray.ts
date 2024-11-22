import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_application_v3_0_ToJsonArray = _test_json_application({
  version: "3.0",
  name: "ToJsonArray",
})(typia.json.application<ToJsonArrayApplication, "3.0">());

interface ToJsonArrayApplication {
  insert(first: ToJsonArray): Promise<void>;
  reduce(first: ToJsonArray, second: ToJsonArray | null): Promise<ToJsonArray>;
  coalesce(
    first: ToJsonArray | null,
    second: ToJsonArray | null,
    third?: ToJsonArray | null,
  ): Promise<ToJsonArray | null>;
}
