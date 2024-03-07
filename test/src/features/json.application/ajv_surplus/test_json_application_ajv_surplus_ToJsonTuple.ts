import typia from "typia";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ToJsonTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonTuple",
  })(typia.json.application<[ToJsonTuple], "ajv", true>());
