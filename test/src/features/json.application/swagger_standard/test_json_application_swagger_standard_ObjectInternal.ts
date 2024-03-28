import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_application_swagger_standard_ObjectInternal =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectInternal",
  })(typia.json.application<[ObjectInternal], "swagger", false>());
