import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_application_swagger_standard_ObjectDynamic =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectDynamic",
  })(typia.json.application<[ObjectDynamic], "swagger", false>());
