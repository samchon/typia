import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_application_v3_1_DynamicUndefined =
  _test_json_application({
    version: "3.1",
    name: "DynamicUndefined",
  })(typia.json.application<DynamicUndefinedApplication, "3.1">());

interface DynamicUndefinedApplication {
  insert(first: DynamicUndefined): Promise<void>;
  reduce(
    first: DynamicUndefined,
    second: DynamicUndefined | null,
  ): Promise<DynamicUndefined>;
  coalesce(
    first: DynamicUndefined | null,
    second: DynamicUndefined | null,
    third?: DynamicUndefined | null,
  ): Promise<DynamicUndefined | null>;
}
