import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_application_ajv_standard_ToJsonAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonAtomicSimple",
  })(typia.json.application<[ToJsonAtomicSimple], "ajv", false>());
