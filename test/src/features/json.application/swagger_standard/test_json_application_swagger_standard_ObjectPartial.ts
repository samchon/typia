import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_application_swagger_standard_ObjectPartial =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectPartial",
  })(typia.json.application<[ObjectPartial], "swagger", false>());
