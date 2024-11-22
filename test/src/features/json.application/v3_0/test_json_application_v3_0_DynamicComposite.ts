import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_application_v3_0_DynamicComposite =
  _test_json_application({
    version: "3.0",
    name: "DynamicComposite",
  })(typia.json.application<DynamicCompositeApplication, "3.0">());

interface DynamicCompositeApplication {
  insert(first: DynamicComposite): Promise<void>;
  reduce(
    first: DynamicComposite,
    second: DynamicComposite | null,
  ): Promise<DynamicComposite>;
  coalesce(
    first: DynamicComposite | null,
    second: DynamicComposite | null,
    third?: DynamicComposite | null,
  ): Promise<DynamicComposite | null>;
}
