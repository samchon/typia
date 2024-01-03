import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_application_ajv_standard_ObjectTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectTuple",
  })(typia.json.application<[ObjectTuple], "ajv", false>());
