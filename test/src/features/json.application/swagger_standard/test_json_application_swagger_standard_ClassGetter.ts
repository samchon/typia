import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ClassGetter =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ClassGetter",
  })(typia.json.application<[ClassGetter], "swagger", false>());
