import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_application_swagger_surplus_ObjectUnionDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionDouble",
  })(typia.json.application<[ObjectUnionDouble], "swagger", true>());
