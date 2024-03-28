import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_application_ajv_surplus_DynamicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicSimple",
  })(typia.json.application<[DynamicSimple], "ajv", true>());
