import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_application_swagger_standard_ClassMethod =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ClassMethod",
  })(typia.json.application<[ClassMethod], "swagger", false>());
