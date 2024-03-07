import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_DynamicComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicComposite",
  })(typia.json.application<[DynamicComposite], "ajv", false>());
