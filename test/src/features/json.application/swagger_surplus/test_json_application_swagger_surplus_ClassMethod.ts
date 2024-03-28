import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_application_swagger_surplus_ClassMethod =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ClassMethod",
  })(typia.json.application<[ClassMethod], "swagger", true>());
