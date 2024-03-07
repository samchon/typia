import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ConstantEnumeration =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ConstantEnumeration",
  })(typia.json.application<[ConstantEnumeration], "swagger", true>());
