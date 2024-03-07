import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ToJsonDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonDouble",
  })(typia.json.application<[ToJsonDouble], "swagger", true>());
