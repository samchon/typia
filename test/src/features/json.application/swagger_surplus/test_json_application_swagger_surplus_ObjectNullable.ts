import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_application_swagger_surplus_ObjectNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectNullable",
  })(typia.json.application<[ObjectNullable], "swagger", true>());
