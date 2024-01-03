import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_application_swagger_surplus_DynamicComposite =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicComposite",
  })(typia.json.application<[DynamicComposite], "swagger", true>());
