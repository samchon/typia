import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ToJsonUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonUnion",
  })(typia.json.application<[ToJsonUnion], "swagger", false>());
