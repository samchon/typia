import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_application_swagger_standard_ObjectUnionDouble =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionDouble",
  })(typia.json.application<[ObjectUnionDouble], "swagger", false>());
