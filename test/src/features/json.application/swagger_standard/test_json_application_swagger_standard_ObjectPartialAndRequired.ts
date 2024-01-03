import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_application_swagger_standard_ObjectPartialAndRequired =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectPartialAndRequired",
  })(typia.json.application<[ObjectPartialAndRequired], "swagger", false>());
