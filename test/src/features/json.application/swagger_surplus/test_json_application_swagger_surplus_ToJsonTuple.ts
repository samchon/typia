import typia from "typia";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ToJsonTuple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonTuple",
  })(typia.json.application<[ToJsonTuple], "swagger", true>());
