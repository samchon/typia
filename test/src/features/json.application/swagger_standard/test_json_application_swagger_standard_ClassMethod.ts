import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ClassMethod =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ClassMethod",
  })(typia.json.application<[ClassMethod], "swagger", false>());
