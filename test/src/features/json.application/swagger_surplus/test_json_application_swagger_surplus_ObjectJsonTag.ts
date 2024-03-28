import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_application_swagger_surplus_ObjectJsonTag =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectJsonTag",
  })(typia.json.application<[ObjectJsonTag], "swagger", true>());
