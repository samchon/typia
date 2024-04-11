import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_application_v3_0_DynamicComposite =
  _test_json_application({
    version: "3.0",
    name: "DynamicComposite",
  })(typia.json.application<[DynamicComposite], "3.0">());
