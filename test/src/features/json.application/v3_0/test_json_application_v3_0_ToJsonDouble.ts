import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_application_v3_0_ToJsonDouble = _test_json_application({
  version: "3.0",
  name: "ToJsonDouble",
})(typia.json.application<ToJsonDoubleApplication, "3.0">());

interface ToJsonDoubleApplication {
  insert(first: ToJsonDouble): Promise<void>;
  reduce(
    first: ToJsonDouble,
    second: ToJsonDouble | null,
  ): Promise<ToJsonDouble>;
  coalesce(
    first: ToJsonDouble | null,
    second: ToJsonDouble | null,
    third?: ToJsonDouble | null,
  ): Promise<ToJsonDouble | null>;
}
