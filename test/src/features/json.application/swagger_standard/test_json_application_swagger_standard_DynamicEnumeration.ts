import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_swagger_standard_DynamicEnumeration =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicEnumeration",
  })(typia.json.application<[DynamicEnumeration], "swagger", false>());
