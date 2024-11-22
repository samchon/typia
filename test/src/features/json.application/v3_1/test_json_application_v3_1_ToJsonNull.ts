import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_application_v3_1_ToJsonNull = _test_json_application({
  version: "3.1",
  name: "ToJsonNull",
})(typia.json.application<ToJsonNullApplication, "3.1">());

interface ToJsonNullApplication {
  insert(first: ToJsonNull): Promise<void>;
  reduce(first: ToJsonNull, second: ToJsonNull | null): Promise<ToJsonNull>;
  coalesce(
    first: ToJsonNull | null,
    second: ToJsonNull | null,
    third?: ToJsonNull | null,
  ): Promise<ToJsonNull | null>;
}
