import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_application_v3_0_ToJsonAtomicSimple =
  _test_json_application({
    version: "3.0",
    name: "ToJsonAtomicSimple",
  })(typia.json.application<[ToJsonAtomicSimple], "3.0">());
