import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ClassGetter =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ClassGetter",
  })(typia.json.application<[ClassGetter], "swagger", true>());
