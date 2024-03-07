import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicComposite",
  })(typia.json.application<[DynamicComposite], "ajv", true>());
