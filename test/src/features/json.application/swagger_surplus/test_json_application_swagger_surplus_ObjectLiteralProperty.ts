import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_application_swagger_surplus_ObjectLiteralProperty =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectLiteralProperty",
  })(typia.json.application<[ObjectLiteralProperty], "swagger", true>());
