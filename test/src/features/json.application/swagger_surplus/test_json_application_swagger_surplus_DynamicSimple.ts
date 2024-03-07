import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_DynamicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicSimple",
  })(typia.json.application<[DynamicSimple], "swagger", true>());
