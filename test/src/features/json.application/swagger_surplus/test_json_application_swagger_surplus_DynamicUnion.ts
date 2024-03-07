import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_DynamicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicUnion",
  })(typia.json.application<[DynamicUnion], "swagger", true>());
