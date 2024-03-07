import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_DynamicTemplate =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicTemplate",
  })(typia.json.application<[DynamicTemplate], "swagger", false>());
