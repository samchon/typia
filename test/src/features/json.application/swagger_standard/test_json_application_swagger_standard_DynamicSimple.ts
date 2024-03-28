import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_application_swagger_standard_DynamicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicSimple",
  })(typia.json.application<[DynamicSimple], "swagger", false>());
