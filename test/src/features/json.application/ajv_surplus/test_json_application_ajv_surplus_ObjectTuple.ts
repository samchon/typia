import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_application_ajv_surplus_ObjectTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectTuple",
  })(typia.json.application<[ObjectTuple], "ajv", true>());
