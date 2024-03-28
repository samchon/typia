import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_application_swagger_standard_ObjectLiteralProperty =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectLiteralProperty",
  })(typia.json.application<[ObjectLiteralProperty], "swagger", false>());
